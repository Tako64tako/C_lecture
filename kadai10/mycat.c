#include<stdio.h>

int main(){
    FILE *fp;
    char c;
    fp = fopen("mycat.c","r");
    while(1){
        c = (char)fgetc(fp);
        if(feof(fp)!=0) break;
        printf("%c",c);
    }
    fclose(fp);
    return 0;
}