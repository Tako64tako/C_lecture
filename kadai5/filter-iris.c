#include <stdio.h>

int  main() {
  double f1[10000], f2[10000], f3[10000], f4[10000];
  double f1_ave, f2_ave, f3_ave, f4_ave;
  int numofData;       // 読み込んだデータの数
  int i;

  // filter-sample2.c のときと同様に
  // 標準入力からデータを読み込んで
  // 配列変数f1 から f4 に格納する処理．
  for(i = 0; feof(stdin) == 0; i++) {  //「入力がある間 繰り返す」の意味
    scanf("%lf,%lf,%lf,%lf\n", &f1[i], &f2[i], &f3[i], &f4[i]);
  }
  numofData = i;
  // 配列変数f1 から f4 の値の合計を
  // 変数f1_ave から f4_ave に格納する処理．
  for(i = 0; i < numofData; i++) {
    f1_ave += f1[i];
    f2_ave += f2[i];
    f3_ave += f3[i];
    f4_ave += f4[i];
  }

  // 変数f1_ave から f4_ave をデータ数で割って
  // 平均を求める処理．
  f1_ave = f1_ave / numofData;
  f2_ave = f2_ave / numofData;
  f3_ave = f3_ave / numofData;
  f4_ave = f4_ave / numofData;


  printf("Average: %f,%f,%f,%f\n", f1_ave, f2_ave, f3_ave, f4_ave);

  return 0;
}
