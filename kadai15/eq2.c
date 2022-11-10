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
    int num=0;
    FILE *fp;
    char *tmp;
    char line[256];
    int con[15];
    if((fp = fopen("h2011_eq.csv","r"))==NULL){
        printf("file open error!!\n");
        exit(1);
    }
    while(fgets(line,256,fp)!=NULL){
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


    for(int i=0;i<num;i++){
        PrintEq(list[i]);
    }

    return 0;
}