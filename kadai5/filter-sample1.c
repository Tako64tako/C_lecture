// filter-sample1.c
#include <stdio.h>

int main() {
  double f1, f2, f3, f4;

  // scanfの"..."部に「\n」を入れるかどうかで 微妙に動作が変わるので注意
  scanf("%lf,%lf,%lf,%lf", &f1, &f2, &f3, &f4);
  printf("%f,%f,%f,%f\n", f1, f2, f3, f4);
  
  return 0;
}
