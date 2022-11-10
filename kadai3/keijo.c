#include<stdio.h>

int main(){
    int a,b,c,temp;

    printf("a b c?");
    scanf("%d %d %d",&a,&b,&c);

    if(a+b>c&&b+c>a&&c+a>b){
        printf("三角形です\n");
        if(a < b){
            temp = a; a= b; b = temp;
        }else if(a < c){
            temp = a; a = c; c = temp;
        }
        if(a*a < b*b + c*c){
            printf("鋭角三角形です\n");
        }else if(a*a == b*b + c*c){
            printf("直角三角形です\n");
        }else if(a*a > b*b + c*c){
            printf("鈍角三角形です\n");
        }
        }else{
        printf("三角形ではありません\n");
        }

    return 0;
}