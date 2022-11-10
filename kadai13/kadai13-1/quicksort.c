#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <string.h>

//#define FOR_DEBUG

int max_cells = (4+1);           // セルの個数を変数で表す
int dmax = 3;                    // realloc時に増やすセル数

typedef struct a_cell {
  int    data;         // 今回は，セルが扱うデータは整数のみとする
  int32_t next;
  /* nextは次に処理すべきデータの添字番号 (-1のときは未使用．
      0のときはリストの末尾を表すとする)．添字番号として使うのは
     0〜30ビット目までとする．31ビット目はガベージコレクション用 */
} lst;

lst *cells;                     // セル領域の「先頭」
int cell_ptr;                    //「次にどのセルを使うか」を示す変数

// ------------------------------------------------------------
void init_cells() {              // セル領域の初期化
  int i;                         // (「全セル，使っていない」状態に)

  // メモリの確保処理
  if(NULL == (cells = (lst*)malloc(sizeof(lst)*max_cells))) exit(0);
  cell_ptr = 1;
  for(i = 1; i < max_cells; i++) cells[i].next = -1;
}

int cell_available() {           // 空きセルがあるときに真
  int i;
  lst *tmp;

  // 空きセルがないときは realloc を試みる
  if(cell_ptr == -1) {
    tmp = (lst*)realloc(cells, sizeof(lst)*(max_cells+dmax));
    if(NULL == tmp) return 0;
    cells = tmp;
    for(i = max_cells; i < max_cells+dmax; i++) cells[i].next = -1;
    cell_ptr = max_cells;
    max_cells += dmax;
  }
  return 1;
}

int get_cell() {           // 空きセルの添字番号が cell_ptr に
  int i, ret;              // 入っているはずなので，それを返す．
                           // さらに，次の空きセルがあるかを
  if(cell_available()) {   // チェックして，cell_ptr に反映
    ret = cell_ptr;
    for(i = cell_ptr+1; i < max_cells; i++) {
      if(cells[i].next == -1) {
	cell_ptr = i;
	return ret;
      }
    }
    for(i = 1; i < cell_ptr; i++) {
      if(cells[i].next == -1) {
	cell_ptr = i;
	return ret;
      }
    }
    cell_ptr = -1;
    return ret;
  }
  return 0;
}

void release_cell(int id) {    // 添字番号idのセルを，未使用
  cells[id].next = -1;         // 状態にする
  if(cell_ptr == -1) cell_ptr = id;
}

// ------------------------------------------------------------
// 「cells[lst].next」の最上位ビット (GC処理用) を0にして返す
int next_id(int lst) { return (cells[lst].next & 0x7fffffff); }

// ------------------------------------------------------------
int addI(int data, int lst) {
  int id;                            // リストlstの先頭にセルを加える

  if(cell_available()) {             // セルが使えるなら，
    id = get_cell();                 // セル (番号 id) をゲットして，
    cells[id].data = data;           // データと次のセル番号 (lst) を
    cells[id].next = lst;            // セットする
    return id;                       // idを返す
  }
  return 0;                          // セルがないときはエラー (0)
}

// ------------------------------------------------------------
void print_cell(lst st) {        // lst型の要素 st を表示
  printf("%d", st.data);
}

void print_lst(int lst) {          // リスト lst の全要素を表示
  printf("[");
  while(1) {
    if(lst == 0) break;
    print_cell(cells[lst]);
    lst = next_id(lst);
    if(lst != 0) printf(", ");
  }
  printf("]\n");
}

// ------------------------------------------------------------
// 添字番号 lst を先頭セルとするリストを辿って，印をつける
// (0x80000000との論理和 → 最上位ビットを1に)
void mark_cells_body(int lst) {
  if(lst == 0) return;
  cells[lst].next = (cells[lst].next | 0x80000000);
  mark_cells_body(next_id(lst));
}

// (注)『「印をつけたいリスト」の先頭セルの添字番号のリスト』には
// 印はつけない (0x7fffffffとの論理積 → 最上位ビットを0に)
void mark_cells(int lst) {
  if(lst == 0) return;
  mark_cells_body(cells[lst].data);
  cells[lst].next = (cells[lst].next & 0x7fffffff);
  mark_cells(next_id(lst));
}

void sweep_cells() {
  int i;

  for(i = 1; i < max_cells; i++) {
    if(cells[i].next == -1) continue;
    if(1 == ((cells[i].next >> 31) & 1)) {
      cells[i].next = (cells[i].next & 0x7fffffff);
      continue;
    }
#ifdef FOR_DEBUG
    printf("ゴミ発見！：[%d, ", i); print_cell(cells[i]); printf("]\n");
#endif
    release_cell(i);
  }
}

void run_gc(int lst) {
  mark_cells(lst);
  sweep_cells();
}

int tail(int lst) {
  if(lst == 0) return 0;
  return next_id(lst);
}

int copy_lst(int lst) {
  if(lst == 0) return 0;
  return addI(cells[lst].data, copy_lst(tail(lst)));
}

int append_lst(int lst1, int lst2) {
  if(lst1 == 0) return copy_lst(lst2);
  return addI(cells[lst1].data, append_lst(tail(lst1), lst2));
}

int nth(int n, int lst) {
  if(lst == 0) return 0;
  if(n == 0) return lst;
  return nth(n-1, tail(lst));
}

int reverse_lst(int lst) {
  int ret_lst;

  if(lst == 0) return 0;
  for(ret_lst = 0; lst != 0; lst = next_id(lst)) {
    ret_lst = addI(cells[lst].data, ret_lst);
  }
  return ret_lst;
}

// 再帰を使った，このような実装も可能
int rec_reverse_lst_body(int lst, int ret_lst) {
  if(lst == 0) return ret_lst;
  return rec_reverse_lst_body(tail(lst),
			      addI(cells[lst].data, ret_lst));
}

int rec_reverse_lst(int lst) {
  return rec_reverse_lst_body(lst, 0);
}

// ------------------------------------------------------------
int read_lst(char str[]) {
  int ret;
  char tmp[256], *tp;

  // 引数str[] が定数 (書き込み不可能) の場合もあるため
  // 文字列strを tmp にコピーしておく
  strcpy(tmp, str);

  // 1トークン目の処理
  if(NULL == (tp = strtok(tmp, " "))) return 0;
  ret = addI(atoi(tp), 0);

  // 2トークン目以降の処理
  while(1) {
    if(NULL == (tp = strtok(NULL, " "))) return reverse_lst(ret);
    ret = addI(atoi(tp), ret);
  }
}

// ------------------------------------------------------------
int collect_left(int e, int lst) {
  if(lst == 0) return 0;
  if(cells[lst].data <= e) {
    return addI(cells[lst].data,
		collect_left(e, tail(lst)));
  }
  return collect_left(e, tail(lst));
}

int collect_right(int e, int lst) {
  if(lst == 0) return 0;
  if(!(cells[lst].data <= e)) {
    return addI(cells[lst].data,
		collect_right(e, tail(lst)));
  }
  return collect_right(e, tail(lst));
}

int quicksort_ver1(int lst) {
  if(lst == 0) return 0;
  return append_lst(quicksort_ver1(collect_left(cells[lst].data, tail(lst))),
		    addI(cells[lst].data,
			  quicksort_ver1(collect_right(cells[lst].data, tail(lst)))));
}

// ------------------------------------------------------------
int collect_flg(int e, int lst, int flg) {
  if(lst == 0) return 0;
  if(flg ^ (cells[lst].data <= e)) {
    return addI(cells[lst].data,
		collect_flg(e, tail(lst), flg));
  }
  return collect_flg(e, tail(lst), flg);
}

int quicksort_ver2(int lst) {
  if(lst == 0) return 0;
  return append_lst(quicksort_ver2(collect_flg(cells[lst].data, tail(lst), 0)),
		    addI(cells[lst].data,
			  quicksort_ver2(collect_flg(cells[lst].data, tail(lst), 1))));
}

// ------------------------------------------------------------
int compare_le(int x, int y) {
  if(x <= y) return 1;
  return 0;
}

int compare_ge(int x, int y) {
  if(x >= y) return 1;
  return 0;
}

int compare_ge_mod10(int x, int y) {
  if(x % 10 >= y % 10) return 1;
  return 0;
}

int collect(int e, int lst, int (*func)(int, int), int flg) {
  if(lst == 0) return 0;
  if(flg ^ (*func)(cells[lst].data, e)) {
    return addI(cells[lst].data,
		collect(e, tail(lst), func, flg));
  }
  return collect(e, tail(lst), func, flg);
}

int quicksort(int lst, int (*func)(int, int)) {
  if(lst == 0) return 0;
  return append_lst(quicksort(collect(cells[lst].data, tail(lst), func, 0), func),
		    addI(cells[lst].data,
			  quicksort(collect(cells[lst].data, tail(lst), func, 1), func)));
}

int compare_BronzeSilverGold(int x,int y){
  int bronzex = x / 10000;
  int silverx = (x / 100) - (bronzex * 100);
  int goldx = x - ((silverx * 100) + (bronzex * 10000));
  x = (goldx * 10000) + (silverx * 100) + bronzex;

  int bronzey = y / 10000;
  int silvery = (y / 100) - (bronzey * 100);
  int goldy = y - ((silvery * 100) + (bronzey * 10000));
  y = (goldy * 10000) + (silvery * 100) + bronzey;
  if(x >= y) return 1;
  return 0;
}

int compare_totalMedals(int x,int y){
  int bronzex = x / 10000;
  int silverx = (x / 100) - (bronzex * 100);
  int goldx = x - ((silverx * 100) + (bronzex * 10000));
  x = goldx + silverx + bronzex;

  int bronzey = y / 10000;
  int silvery = (y / 100) - (bronzey * 100);
  int goldy = y - ((silvery * 100) + (bronzey * 10000));
  y = goldy + silvery  + bronzey;
  if (x >= y)
    return 1;
  return 0;
}

// ------------------------------------------------------------
int main() {
  init_cells();

  printf("quicksort_ver1\n");
  print_lst(read_lst("5 4 2 3"));
  print_lst(quicksort_ver1(read_lst("5 4 2 3")));

  printf("quicksort_ver2\n");
  print_lst(read_lst("5 4 2 3"));
  print_lst(quicksort_ver2(read_lst("5 4 2 3")));

  printf("quicksort (compare_le)\n");
  print_lst(read_lst("5 4 2 3"));
  print_lst(quicksort(read_lst("5 4 2 3"), compare_le));

  printf("quicksort (compare_ge)\n");
  print_lst(read_lst("5 4 2 3"));
  print_lst(quicksort(read_lst("5 4 2 3"), compare_ge));

  printf("quicksort (compare_ge_mod10)\n");
  print_lst(read_lst("14 25 32 43"));
  print_lst(quicksort(read_lst("14 25 32 43"),
		      compare_ge_mod10));


  // 演習
  printf("quicksort (compare_BronzeSilverGold)\n");
  print_lst(read_lst("031004 100501 110210 010120 040704 051004"));
  print_lst(quicksort(read_lst("031004 100501 110210 010120 040704 051004"), compare_BronzeSilverGold));

  // 演習
  printf("quicksort (compare_totalMedals)\n");
  print_lst(read_lst("031004 100501 110210 010120 040704 051004"));
  print_lst(quicksort(read_lst("031004 100501 110210 010120 040704 051004"), compare_totalMedals));

  // おまけ：「gcc -DFOR_DEBUG quicksort.c」でコンパイルして
  // どれだけ「ゴミ」ができているか 確認してみよう
  run_gc(0);

  free(cells);

  return 0;
}
