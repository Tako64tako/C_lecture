#include<stdio.h>

int main(){
    char c;
    c  = getchar();
    if('a' <= c && c <= 'z'){
        printf("%cは小文字です\n",c);
    }else{
        printf("%cは大文字です\n",c);
    }
    return 0;
}