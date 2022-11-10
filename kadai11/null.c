#include<stdio.h>

int main(){
    int *p,x;
    p = &x;
    printf("&x = %p\n",p);
    printf("&x = %ld\n",(long int)p);

    p = (int *)NULL;
    printf("NULL = %p\n",p);
    printf("NULL = %ld\n",(long int)p);

    return 0;
}