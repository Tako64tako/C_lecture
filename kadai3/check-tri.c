#include<stdio.h>

int main(){
    int a,b,c;

    printf("a b c?");
    scanf("%d %d %d",&a,&b,&c);

    if(a+b>c&&b+c>a&&c+a>b){
        printf("三角形です\n");
    }else{
        printf("三角形ではありません\n");
    }
}