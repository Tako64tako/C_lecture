#include <stdio.h>            // ptrExample.c

struct {
  int dat;
} x, *ptr;

int main() {
  x.dat = 100, ptr = &x;

  // ptr -> dat : ptr が指す構造体(x)の メンバ dat の値
  printf("%d\n" , ptr -> dat);

  return 0;
}
