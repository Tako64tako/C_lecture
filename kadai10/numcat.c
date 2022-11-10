#include <stdio.h>
#include <stdlib.h>

int main(int argc , char *argv[]){
    FILE *fp1;
    char lst[100];
    int i =0;
    fp1 = fopen(argv[1],"r+");

    if(argc != 2){
        printf("The file was not found\n");
        exit(1);
    }

    if((fp1 = fopen(argv[1],"r+")) == NULL){
        printf("The file is empty\n");
        exit(1);
    }

    while (1)
    {
        fgets(lst,100,fp1);
        if (feof(fp1) != 0)
            break;
        printf("%5d : %s",i+1,lst);
        i++;
    }

    fclose(fp1);
}