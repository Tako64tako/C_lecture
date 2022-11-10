#include <stdio.h>      // ファイル名：student.c
#include <string.h>

struct student {
  char name[20];        // 名前
  int  eng;             // 英語の得点
  int  math;            // 数学の得点
};

int main() {
  struct student   alice, carol;
  struct student   bob = { "Bob",  90,  88 };

  strcpy(alice.name, "Alice"); // 変数aliceの「name」を設定
  alice.eng = 80;              // aliceの「eng」に80を代入
  alice.math = 73;             // aliceの「math」に73を代入

  printf("名前       = %s\n", alice.name);
  printf("英語の得点 = %d\n", alice.eng);
  printf("数学の得点 = %d\n", alice.math);
  printf("合計得点   = %d\n", alice.eng+alice.math);

  return 0;
}
