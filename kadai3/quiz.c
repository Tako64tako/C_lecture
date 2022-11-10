#include<stdio.h>

int main(){
    int x;
    printf("問題: macintosh を作ったApple社はどこの国の会社か？\n");
    printf("(1)日本\n(2)米国\n(3)中国\n");
    printf("\n");
    do{
        printf("答えの数字を入力してください\n");
        scanf("%d",&x);
    }while(x!=2);
    printf("正解です\n");
}