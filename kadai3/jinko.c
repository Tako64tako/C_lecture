#include<stdio.h>
int main(){
    int x=120000000,n=95000000,i;
    for(i=0;x>=n;i++){
        x = x * 0.996;
    }
    printf("%d\n",i);
}