#include<stdio.h>
#include<ctype.h>

int main(){
    int i;
    char str[] = "The quick brown fox jumps over the lazy dog.";

    printf("もとの文字列 = %s\n",str);

    for(int i=0;str[i] != '\0';i++){
            str[i] = toupper(str[i]);
        }

    printf("変換後の文字列 = %s\n",str);
    return 0;
}