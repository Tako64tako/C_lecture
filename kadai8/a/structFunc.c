#include <stdio.h>         // ファイル名：structFunc.c

typedef struct {
  char name[20];
  int  eng;
  int  math;
} std;

// キーボード入力した「名前」「英語の得点」「数学の得点」を
// 構造体として返す関数
std inputData()    // ←「struct student inputData()」でもOK
{
  std tmp;

  printf("名前は? "); scanf("%s", tmp.name);
  printf("英語 =  "); scanf("%d", &tmp.eng);
  printf("数学 =  "); scanf("%d", &tmp.math);
  printf("\n");

  return(tmp);
}

// 生徒の情報を 画面に表示
void printData(int i, std member) {
  printf("出席番号： %d \n", i);
  printf("名前    ： %s \n", member.name);
  printf("英語    ： %d \n", member.eng);
  printf("数学    ： %d \n", member.math);
  printf("総合得点： %d \n\n", member.eng+member.math);
}

int main() {
  int i;
  std myclass[8];

  for(i = 1; i <= 7; i++) {
    myclass[i] = inputData();     // std型の値をもらって
  }                               // 変数 myclass[i] に代入

  for(i = 1; i <= 7; i++) {
    printData(i, myclass[i]);     // std型の値を
  }                               // 関数 printData に渡す
}
