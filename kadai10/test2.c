#include <stdio.h>
#include <ctype.h>

#define NAME 100

int main(int argc, char *argv[])
{
    FILE *fp;
    char infname[NAME];
    char outfname[NAME];
    char ch;
    char ch2;


    fp = fopen(argv[1], "r");

    if (fp == NULL)
    {
        printf("ファイルの読み込みに失敗しました\n");
        return 0;
    }
    fp = fopen(outfname, "w");

    while ((ch = fgetc(fp)) != EOF)
    {
        putchar(ch);
        ch2 = toupper(ch);
        fputc(ch2, fp);
    }
    fclose(fp);
    return 0;
}