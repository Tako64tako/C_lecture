#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    FILE *fp1,*fp2;
    char c;
    int i = 0;
    fp1 = fopen(argv[1],"r");
    fp2 = fopen(argv[2],"w");

    if (argc != 3){
        printf("The file was not found\n");
        exit(1);
    }

    if ((fp1 = fopen(argv[1], "r")) == NULL){
        printf("The file is empty\n");
        exit(1);
    }

    while (1)
    {
        c = (char)fgetc(fp1);
        if (feof(fp1) != 0)
            break;
        printf("%c", c);
        fprintf(fp2,"%c",c);
    }

    fclose(fp1);
    fclose(fp2);
    printf("\n\ncopy completed\n");

    return 0;
}