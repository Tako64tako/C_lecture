#include<stdio.h>

int main(){
    char c;
    c  = getchar();
    if('a' <= c && c <= 'z'){
        printf("%cは小文字です\n",c);
        c -= 32;
        printf("「%c」大文字に変換しました\n",c);
    }else{
        printf("%cは大文字です\n",c);
        c += 32;
        printf("「%c」小文字に変換しました\n",c);
    }
    return 0;
}