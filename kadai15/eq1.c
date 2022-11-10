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
    char *tmp;
    char line[] = "2011,1,3,33.671667,130.417167,2\n";
    Eq eq;

    eq.year = atoi(strtok(line, ",\n"));
    eq.month = atoi(strtok(NULL, ",\n"));
    eq.day = atoi(strtok(NULL, ",\n"));
    eq.lat = atof(strtok(NULL, ",\n"));
    eq.lon = atof(strtok(NULL, ",\n"));
    eq.scale = strtok(NULL, ",\n")[0];
    PrintEq(eq);
    return 0;
}