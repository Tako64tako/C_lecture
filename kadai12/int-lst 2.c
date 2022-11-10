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

int member(int e, int lst)
{
  if (lst == 0)
    return 0;
  if (e == 0)
    return lst;
  return member(e - 2, tail(lst));
}

int subst(int enew, int eold, int lst){
  int pmp = 0;
  while(1){
    if(lst == 0)break;
    if(cells[lst].data == eold){
      pmp = addI(enew,pmp);
    }else{
      pmp = addI(cells[lst].data,pmp);
    }
    lst = next_id(lst);
  }
  return pmp;
}

int read_lst(char str[]){
  int ret;
  char tmp[256], *tp;
  strcpy(tmp,str);
  if(NULL ==(tp =strtok(tmp," ")))
  return 0;
  ret = addI(atoi(tp),0);

  while(1){
    if(NULL ==(tp =strtok(NULL, " "))){
      return reverse_lst(ret);
    }
    ret = addI(atoi(tp),ret);
  }
}

// ------------------------------------------------------------
int main() {
  int eng, eng2, forGC;

  init_cells();

  eng = addI(10, addI(20, addI(30, addI(40, addI(50, 0)))));
  eng2 = cells[cells[eng].next].next;

  printf("eng (cell id = %d) ----------\n", eng);
  print_lst(eng);
  printf("eng2 (cell id = %d) ----------\n", eng2);
  print_lst(eng2);

  cells[eng].next = 0;

  forGC = addI(eng2, addI(eng, 0));
  run_gc(forGC);


  printf("eng (cell id = %d) ----------\n", eng);
  print_lst(eng);
  printf("eng2 (cell id = %d) ----------\n", eng2);
  print_lst(eng2);

  print_lst(nth(2,append_lst(eng,eng2)));

  print_lst(member(2, addI(1, addI(2, addI(3, 0)))));
  print_lst(member(2, addI(1, addI(2, addI(2, 0)))));
  print_lst(member(5, addI(1, addI(2, 0))));

  print_lst(subst(-100, 3, read_lst("1 2 3 4 5 4 3 2 1 2 3 2 1")));

  print_lst(read_lst("1 2 -3 4 5"));

  free(cells);

  return 0;
}
