#include <stdio.h>
#include <string.h>

#define MAX_CELLS (100 + 1) // セルの個数 \
                            // (cells[1]〜cells[100])の100個)
typedef struct student
{
  char name[20];
  int eng;
  int math;
  int next; // 次に処理すべきデータの添字番号
} std;

std cells[MAX_CELLS]; // セル領域のための配列変数
int cell_ptr;         //「次にどのセルを使うか」を示す変数

// ------------------------------------------------------------
void init_cells()
{        // セル領域の初期化
  int i; // (「全セル，使っていない」状態に)

  cell_ptr = 1;
  for (i = 1; i < MAX_CELLS; i++)
    cells[i].next = -1;
}

int cell_available()
{ // 空きセルがあるときに真
  if (cell_ptr == -1)
    return 0; // (cell_ptr == -1 のときは
  return 1;   //  空きセルなし)
}

void release_cell(int id)
{                      // 添字番号idのセルを，未使用
  cells[id].next = -1; // 状態にする
  if (cell_ptr == -1)
    cell_ptr = id;
}

int get_cell()
{             // 空きセルの添字番号が cell_ptr に
  int i, ret; // 入っているはずなので，それを返す．
              // さらに，次の空きセルがあるかを
  if (cell_available())
  { // チェックして，cell_ptr に反映
    ret = cell_ptr;
    for (i = cell_ptr + 1; i < MAX_CELLS; i++)
    {
      if (cells[i].next == -1)
      {
        cell_ptr = i;
        return ret;
      }
    }
    for (i = 1; i < cell_ptr; i++)
    {
      if (cells[i].next == -1)
      {
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
int add_elm(char name[], int eng, int math, int lst)
{
  int id; // リストlstの先頭にセルを加える

  if (cell_available())
  {                               // セルが使えるなら，
    id = get_cell();              // セル (番号 id) をゲットして，
    strcpy(cells[id].name, name); // 名前・英語・数学の点数と
    cells[id].eng = eng;          // 次のセル番号 (lst) を
    cells[id].math = math;        // セットする
    cells[id].next = lst;
    return id; // idを返す
  }
  return 0; // セルがないときはエラー (0)
}
int insert_elm(char name[], int eng, int math, int cid)
{
  int i;
  if (cell_available())
  {
    int id = get_cell();
    strcpy(cells[id].name, name);
    cells[id].eng = eng;
    cells[id].math = math;
    cells[id].next = cells[cid].next;
    cells[cid].next = id;
    return cid;
  }
  else
  {
    return 0;
  }
}

int add_elm_tail(char name[], int eng, int math, int lst)
{
  int ret_lst, id;

  if (lst == 0)
    return add_elm(name, eng, math, lst);
  if (cell_available())
  {
    ret_lst = lst;
    for (; cells[lst].next != 0; lst = cells[lst].next)
      ;
    id = get_cell();
    strcpy(cells[id].name, name);
    cells[id].eng = eng;
    cells[id].math = math;
    cells[id].next = 0;
    cells[lst].next = id;
    return ret_lst;
  }
  return 0;
}

int del_elm(char name[], int lst)
{
  int prev = -1, lst_top = lst, ret;

  while (1)
  {
    if (lst == 0)
      return 0; // リストが空っぽなら0を返す
    if (!strcmp(name, cells[lst].name))
    {
      if (prev == -1)
      {                        // 先頭の要素を消す場合
        ret = cells[lst].next; // リンクを貼り直して
        release_cell(lst);     // セルを開放し，
        return ret;            // リストの先頭になるセルを返す
      }
      else
      {
        cells[prev].next = cells[lst].next; // 2番目以降の要素を
        release_cell(lst);                  // 消す場合も同様だが
        return lst_top;                     // 予めリストの先頭を
      }                                     // 覚えておいて返す．
    }
    prev = lst;            // 空リストでも削除対象でもない
    lst = cells[lst].next; // ときは，参照対象を次のセルへ
  }                        // 再設定．
}

int find_elm(char name[], int lst)
{
  while (1)
  {
    if (lst == 0)
      return 0;
    if (!strcmp(name, cells[lst].name))
      return lst;
    lst = cells[lst].next;
  }
}

std id2std(int id)
{
  return cells[id];
}

int goukei(char name[], int lst)
{
  int sum;
  sum = id2std(find_elm(name, lst)).eng + id2std(find_elm(name, lst)).math;
  return sum;
}
// ------------------------------------------------------------
void print_cell(std st)
{ // std型の要素 st を表示
  printf("[名前：%s, 英語：%d, 数学：%d]\n",
         st.name, st.eng, st.math);
}

void print_lst(int lst)
{ // リスト lst の全要素を表示
  while (1)
  {
    if (lst == 0)
      return;
    print_cell(cells[lst]);
    lst = cells[lst].next;
  }
}

// ------------------------------------------------------------
int main()
{
  int lst;
  std x;

  init_cells();

  if (!(lst = add_elm("alice", 80, 73, 0)))
    return -1;
  if (!(lst = add_elm_tail("bob", 90, 80, lst)))
    return -1;
  if (!(lst = add_elm_tail("carol", 72, 95, lst)))
    return -1;
  if (!(lst = add_elm_tail("dave", 82, 65, lst)))
    return -1;
  print_lst(lst);

  //lst = del_elm("alice", del_elm("bob", lst));
  print_lst(lst);

  print_cell(cells[find_elm("carol", lst)]);

  printf("carolの合計得点は%dです\n", goukei("carol", lst));

  insert_elm("charlie", 50, 50, 3);
  add_elm_tail("focas",89,65,lst);
  insert_elm("emriy",53,67,lst);

  //print_cell(cells[find_elm("charlie",lst)]);
  print_lst(lst);
  return 0;
}


// int selection_sort(int lst){
//   if(lst == 0) return 0;
//   int tmp = add_elm_tail(id2alst(mincell(lst)).name,id2alst(mincell(lst)).data,0);
//   lst = del_elm(id2alst(mincell(lst)).name,lst);
// while(1){
//   add_elm_tail(id2alst(mincell(lst)).name,id2alst(mincell(lst)).data,tmp);
//   lst = del_elm(id2alst(mincell(lst)).name,lst)
//   if(lst==0) return tmp;
//}
// }