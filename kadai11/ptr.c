#include <stdio.h>

int main(){
    int x,y,*p,*q;
    p = &x;
    *p = 1;
    printf("*p = %d\n",*p);
    printf("x = %d\n",x);

    q = &y;
    *q = *p;
    printf("*q = %d\n",*q);
    printf("y = %d\n",y);
}