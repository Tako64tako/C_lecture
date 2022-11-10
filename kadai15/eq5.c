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
    printf("%d/%d/%d (%f,%f) %c\n", eq.year, eq.month, eq.day, eq.lat, eq.lon, eq.scale);
}

int main()
{
    Eq list[10624];
    Eq eq;
    int num = 0;
    FILE *fp;
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
        //printf("%s", line);
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
        if (strcmp(&list[i].scale, "1") == 0)
        {
            con[1] += 1;
        }
        if (strcmp(&list[i].scale, "2") == 0)
        {
            con[2] += 1;
        }
        if (strcmp(&list[i].scale, "3") == 0)
        {
            con[3] += 1;
        }
        if (strcmp(&list[i].scale, "4") == 0)
        {
            con[4] += 1;
        }
        if (strcmp(&list[i].scale, "7") == 0)
        {
            con[5] += 1;
        }
        if (strcmp(&list[i].scale, "A") == 0)
        {
            con[6] += 1;
        }
        if (strcmp(&list[i].scale, "B") == 0)
        {
            con[7] += 1;
        }
        if (strcmp(&list[i].scale, "C") == 0)
        {
            con[8] += 1;
        }
        if (strcmp(&list[i].scale, "D") == 0)
        {
            con[9] += 1;
        }
    }

    for (int i = 1; i < 10; i++)
    {
        switch (i)
        {
        case 1:
            printf("震度1の回数:");
            break;
        case 2:
            printf("震度2の回数:");
            break;
        case 3:
            printf("震度3の回数:");
            break;
        case 4:
            printf("震度4の回数:");
            break;
        case 5:
            printf("震度7の回数:");
            break;
        case 6:
            printf("震度5弱の回数:");
            break;
        case 7:
            printf("震度5強の回数:");
            break;
        case 8:
            printf("震度6弱の回数:");
            break;
        case 9:
            printf("震度6強の回数:");
            break;
        }
        printf("%d\n", con[i]);
    }

    return 0;
}