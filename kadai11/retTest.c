#include<stdio.h>

void retTest(int x, int *ret1, int *ret2){
    *ret1 = x + 2;
    *ret2 = x + 3;
}

    int main(){
        int a = 5, b,c;
        retTest(a,&b,&c);

        printf("a = %d\n",a);
        printf("b = %d\n",b);
        printf("c = %d\n",c);
    return 0;
}