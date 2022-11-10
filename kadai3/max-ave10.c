#include<stdio.h>
int main(){
    int i,x = 0,y = 0,tmp = x;
    for(i = 0;i < 10;i++){
        printf("整数を入力してください");
        scanf("%d",&x);
        y += x;
        if(x>tmp){
            tmp = x;
        }
    }
    printf("平均は%dです\n",y/i);
    printf("最大値は%dです\n",tmp);
}