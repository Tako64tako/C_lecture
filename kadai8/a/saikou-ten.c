#include <stdio.h>            // ファイル名：saikou-ten.c

typedef struct {
  char name[20];
  int  eng;
  int  math;
} std;

int main() {
  int i, maxID;

  std myclass[8] = {
    {"",        0,   0},      // myclass[0] (ダミー)
    {"Alice",  80,  73},      // myclass[1]
    {"Bob"  ,  90,  88},      // myclass[2]
    {"Carol",  72,  95},      // myclass[3]
    {"Dave" ,  82,  65},      // myclass[4]
    {"Emma" , 100,  89},      // myclass[5]
    {"Fred" ,  88,  84},      // myclass[6]
    {"Gina" ,  93,  71}       // myclass[7]
  };

  ＜ここを埋めましょう＞

  printf("最高得点者 は %s です (合計得点 = %d 点) \n",
         myclass[maxID].name,
         myclass[maxID].eng+myclass[maxID].math);

  return 0;
}
