#include<stdio.h>
#include<stdlib.h>

int main(){
    FILE *fp;

    fp = fopen("test.txt","r");
    if(fp == NULL){
        fprintf(stderr,"ファイルがオープンできません\n");
        exit(1);
    }
    fclose(fp);

    return 0;
}