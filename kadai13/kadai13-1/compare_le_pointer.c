#include <stdio.h>

int compare_le(int x, int y) {
  if(x <= y) return 1;
  return 0;
}

int compare_ge(int x, int y) {
  if(x >= y) return 1;
  return 0;
}

// ------------------------------------------------------------
int main() {
  // 関数の先頭番地を格納する「ポインタ変数 func」を定義
  int (*func)(int, int);

  // funcに 関数名「compare_le」を代入
  // (関数名は じつは アドレスを表している)
  func = compare_le;

  // compare_le関数を直接使って「2 <= 3」を計算
  printf("A: (2 <= 3) = %d\n", compare_le(2, 3));

  // 変数funcに代入された関数 (中身はcompare_le) を
  // 使って「2 <= 3」を計算
  printf("B: (2 <= 3) = %d\n", (*func)(2, 3));

  func = compare_ge;
  printf("A: (2 >= 3) = %d\n", compare_ge(2, 3));
  printf("B: (2 >= 3) = %d\n", (*func)(2, 3));

  return 0;
}
