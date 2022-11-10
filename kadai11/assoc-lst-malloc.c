#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int max_cells = (4+1);           // セルの個数を変数で表す
int dmax = 3;                    // realloc時に増やすセル数

typedef struct assocList {
  char name[20];
  int data;
  int next;                      // 次に処理すべきデータの添字番号
} alst;

alst *cells;                     // セル領域の「先頭」
int cell_ptr;                    //「次にどのセルを使うか」を示す変数

// ------------------------------------------------------------
void init_cells() {              // セル領域の初期化
  int i;                         // (「全セル，使っていない」状態に)

  // メモリの確保処理
  if(NULL == (cells = (alst*)malloc(sizeof(alst)*max_cells))) exit(0);
  cell_ptr = 1;
  for(i = 1; i < max_cells; i++) cells[i].next = -1;
}

int cell_available() {           // 空きセルがあるときに真
  int i;
  alst *tmp;

  // 空きセルがないときは realloc を試みる
  if(cell_ptr == -1) {
    tmp = (alst*)realloc(cells, sizeof(alst)*(max_cells+dmax));
    if(NULL == tmp) return 0;
    cells = tmp;
    for(i = max_cells; i < max_cells+dmax; i++) cells[i].next = -1;
    cell_ptr = max_cells;
    max_cells += dmax;
  }
  return 1;
}

void release_cell(int id) {    // 添字番号idのセルを，未使用
  cells[id].next = -1;         // 状態にする
  if(cell_ptr == -1) cell_ptr = id;
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

// ------------------------------------------------------------
int add_elm(char name[], int data, int lst) {
  int id;                          // リストlstの先頭にセルを加える

  if(cell_available()) {           // セルが使えるなら，
    id = get_cell();               // セル (番号 id) をゲットして，
    strcpy(cells[id].name, name);  // データと次のセル番号 (lst) を
    cells[id].data = data;         // セットする
    cells[id].next = lst;
    return id;                     // idを返す
  }
  return 0;                        // セルがないときはエラー (0)
}

int add_elm_tail(char name[], int data, int lst) {
  int ret_lst, id;

  if(lst == 0) return add_elm(name, data, lst);
  if(cell_available()) {
    ret_lst = lst;
    for(; cells[lst].next != 0; lst = cells[lst].next);
    id = get_cell();
    strcpy(cells[id].name, name);
    cells[id].data = data;
    cells[id].next = 0;
    cells[lst].next = id;
    return ret_lst;
  }
  return 0;
}

// ------------------------------------------------------------
void print_cell(alst st) {        // alst型の要素 st を表示
  printf("[キー：%s, データ：%d]\n",
	 st.name, st.data);
}

void print_lst(int lst) {          // リスト lst の全要素を表示
  while(1) {
    if(lst == 0) return;
    print_cell(cells[lst]);
    lst = cells[lst].next;
  }
}

// ------------------------------------------------------------
int find_elm(char name[], int lst) {   // キー「name」でセルを検索
  while(1) {
    if(lst == 0) return 0;
    if(!strcmp(name, cells[lst].name)) return lst;
    lst = cells[lst].next;
  }
}

alst id2alst(int id) {               // セルの番号(id)を与えると，
  return cells[id];                  // その中身 (alst型の要素) を取り出す
}

// ------------------------------------------------------------
int setv(int lst, char name[], int data) {
  int i;

  if(i = find_elm(name, lst)) {   // すでに そのキーで
    cells[i].data = data;         // 値がセットされて
    return lst;                   // いたなら 更新処理
  } else {
    return add_elm_tail(name, data, lst);
  }                               // さもなくば lst の
}                                 // 末尾にセルを追加

int valof(int lst, char name[]) {
  int i;

  if(i = find_elm(name, lst)) return id2alst(i).data;
  return 0;
}

// ------------------------------------------------------------
int main() {
  int math, eng, math2;

  init_cells();

  math = setv(0, "alice", 80);
  setv(math, "bob", 90);
  setv(math, "dave", 72);

  eng  = setv(0, "alice", 73);
  setv(eng, "bob", 80);
  setv(eng, "dave", 950);    // わざと間違えておく

  printf("math ----------\n");
  print_lst(math);
  printf("eng ----------\n");
  print_lst(eng);            // daveの点数がおかしい

  setv(eng, "dave", 95) ;    // 正しい点数で上書き
  printf("eng (corrected) ----------\n");
  print_lst(eng);

  printf("alice's eng score = %d\n", valof(eng, "alice"));
  printf("alice's total score = %d\n",
	 valof(eng, "alice")+valof(math, "alice"));

  free(cells);

  return 0;
}

