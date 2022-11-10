#include<stdio.h>
#include<string.h>
#include<stdlib.h>

#define ATOI atoi(p)
#define PRINT(X) printf("medals = %d\n",X)


int main(){
    char buf[256]={"031004 100501 110210 040704 051004"};
    char *p;
    int x,y,z,a;
    p = strtok(buf," ");
    x=ATOI;
    y=ATOI;
    z=ATOI;
    a=ATOI;
    x = x / 10000;
    PRINT(x);
    y = (a / 100) - (x * 100);
    PRINT(y);
    z = a - ((y * 100) + x * 10000);
    PRINT(z);
    while(p != NULL){
        p = strtok(NULL, " ");
        if (p != NULL){
            x=ATOI;
            y=ATOI;
            z=ATOI;
            a=ATOI;
            x = x / 10000;
            PRINT(x);
            y = (a / 100) - (x * 100);
            PRINT(y);
            z = a - (( y * 100) + x * 10000);
            PRINT(z);
        }
    }
    return 0;
}