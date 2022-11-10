#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

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
    int con[365],cin[100],i,j,k;
    double avg,sum;
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

    avg = num /365.0;
    for(i=0;i<num;i++){
        con[j] += 1;
        if(list[i+1].day != list[i].day){
            j++;
        }
    }

    j = 0;
    for(i=0;i<365;i++){
        if (con[i] == 0){
            break;
        }
        sum += pow(con[i] - avg,2.0);
        j++;
    }

    sum = sqrt(sum/j);
    printf("平均は%f\n",avg);
    printf("標準偏差%f\n",sum);
    return 0;
}