#include<stdio.h>

int main(){
    int i=20,sum=0;
    while(i!=10){
        sum += i;
        i--;
    }
    printf("sum is %d\n",sum);
}