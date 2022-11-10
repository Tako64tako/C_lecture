#include <stdio.h>
#include <stdlib.h>
#define MAXDATA 812

void shuffle(int array[], int size)
{
    int i = size;
    while (i > 1)
    {
        int j = rand() % i + 0;
        i--;
        int t = array[i];
        array[i] = array[j];
        array[j] = t;
    }
}

int main()
{
    int values[MAXDATA];
    int m;
    int i;
    for (m = 0; m < MAXDATA; m++)
    {
        values[m] = m + 1;
    }

    int size = sizeof(values) / sizeof(int);
    shuffle(values, size);

    FILE *fp;
    fp = fopen("test.txt", "a");
    if (fp == NULL)
    {
        perror("ファイルの読み込みに失敗");
        return 1;
    }

    for (i = 0; i < size; i++)
    {
        fprintf(fp, "%d\n", values[i]);
    }

    fclose(fp);

    return 0;
}