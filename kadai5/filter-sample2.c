// filter-sample2.c
#include <stdio.h>

int  main() {
  double f1[10000], f2[10000], f3[10000], f4[10000];
  int numofData;       // 読み込んだデータの数
  int i;

  for(i = 0; feof(stdin) == 0; i++) {  //「入力がある間 繰り返す」の意味
    scanf("%lf,%lf,%lf,%lf\n", &f1[i], &f2[i], &f3[i], &f4[i]);
  }
  numofData = i;

  for(i = 0; i < numofData; i++) {
    printf("%d: %f,%f,%f,%f\n", i, f1[i], f2[i], f3[i], f4[i]);
  }

  return 0;
}
