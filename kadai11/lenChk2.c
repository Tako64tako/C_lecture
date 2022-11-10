#include<stdio.h>

int main(){
    char string[100] ="This is a sample sentence.";
    char *ptr;
    int nume = 0;

    for(ptr = string;*ptr != '\0'; ptr++){
        if(*ptr == 'e')
        nume++;
    }
    printf("文字列%sに現れる\'e\'の個数は%dです\n",string,nume);
    return 0;
}