#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int main(void){
    char *string;
    string = (char *)malloc(sizeof(char)*100);
    if(string == NULL){
        printf("メモリ確保できません\n");
        exit(1);
    }
    strcpy(string,"This is a sample sentence.");
    printf("%s\n",string);
    free(string);
    return 0;
}