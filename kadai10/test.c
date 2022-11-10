#include <stdio.h>
#include <ctype.h>

#define NAME 100

int main(void)
{
    FILE *fp;
    FILE *fp2;
    char infname[NAME];
    char outfname[NAME];
    char ch;
    char ch2;

    printf("コピー元ファイル名：");
    scanf("%s", infname);
    printf("コピー先ファイル名：");
    scanf("%s", outfname);

    fp = fopen(infname, "r");

    if (fp == NULL)
    {
        printf("ファイルの読み込みに失敗しました\n");
        return 0;
    }
    fp2 = fopen(outfname, "w");

    while ((ch = fgetc(fp)) != EOF)
    {
        putchar(ch);
        ch2 = toupper(ch);
        fputc(ch2, fp2);
    }
    fclose(fp);
    fclose(fp2);
    return 0;
}