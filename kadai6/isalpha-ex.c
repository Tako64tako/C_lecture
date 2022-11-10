#include<stdio.h>
#include<ctype.h>

int main(){
    char c;

    for(c=32;c<=126;c++){
        if(isalpha(c)){
            printf("文字%cはアルファベットです\n",c);
        }else{
            printf("文字%cはアルファベットではありません\n",c);
        }
    }
    return 0;
}