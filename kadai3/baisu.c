#include<stdio.h>
int main(){
    int max,n,i,x;
    printf("max&n?");
    scanf("%d %d",&max,&n);
    for(i=0;i<max;i++){
        if(i%n==0){
            x += i;
        }
    }
    printf("%d",x);
}