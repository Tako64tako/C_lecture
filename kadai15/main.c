#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct eq
{
    int year;
    int month;
    int day;
    double lat; //緯度
    double lon; //経度
    char scale;
} Eq;

void PrintEq(Eq eq)
{
    printf("%d,%d,%d,%f,%f,%c\n", eq.year, eq.month, eq.day, eq.lat, eq.lon, eq.scale);
}

int main()
{
    Eq list[10624];
    Eq eq;
    int num = 0,k=0;
    FILE *fp;
    FILE *file;
    char *tmp;
    char line[256];
    int con[15];
    if ((fp = fopen("h2011_eq.csv", "r")) == NULL)
    {
        printf("file open error!!\n");
        exit(1);
    }
    while (fgets(line, 256, fp) != NULL)
    {
        eq.year = atoi(strtok(line, ",\n"));
        eq.month = atoi(strtok(NULL, ",\n"));
        eq.day = atoi(strtok(NULL, ",\n"));
        eq.lat = atof(strtok(NULL, ",\n"));
        eq.lon = atof(strtok(NULL, ",\n"));
        eq.scale = strtok(NULL, ",\n")[0];

        list[num] = eq;
        num++;
    }
    fclose(fp);
    for (int i = 0; i < num; i++)
    {
        if (list[i].month >= 3 && list[i].day >= 1)
        {
            if (strcmp(&list[i].scale, "1") != 0)
            {
                if (strcmp(&list[i].scale, "2") != 0)
                {
                    if (strcmp(&list[i].scale, "3") != 0)
                    {
                        PrintEq(list[i]);
                        k++;
                        //fprintf(file, "%d,%d,%d,%f,%f,%c\n", list[i].year, list[i].month, list[i].day, list[i].lat, list[i].lon, list[i].scale);
                    }
                }
            }
        }
    }
    printf("%d\n",k);
    return 0;
}