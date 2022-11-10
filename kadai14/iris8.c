#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>

#define FORLOOP 150

typedef struct
{
    double sepal_length;
    double sepal_width;
    double petal_length;
    double petal_width;
    char class[50];
} iris;

void PrintFunc(iris data)
{
    printf("sepal_length : %f\n", data.sepal_length);
    printf("sepal_width : %f\n", data.sepal_width);
    printf("petal_length : %f\n", data.petal_length);
    printf("petal_width : %f\n", data.petal_width);
    printf("class : %s\n", data.class);
}

iris SetIris(iris data, char hoge[50])
{
    char *p;
    p = strtok(hoge, ",");
    data.sepal_length = atof(p);
    p = strtok(NULL, ",");
    data.sepal_width = atof(p);
    p = strtok(NULL, ",");
    data.petal_length = atof(p);
    p = strtok(NULL, ",");
    data.petal_width = atof(p);
    p = strtok(NULL, ",");
    strcpy(data.class, p);
    return data;
}

void shuffle(iris array[], int size)
{
    for (int i = 0; i < size; i++)
    {
        int j = rand() % size;
        iris t = array[i];
        array[i] = array[j];
        array[j] = t;
    }
}

int main()
{
    FILE *fp;
    char line[50] = "5.7,2.9,4.2,1.3,Iris-versicolor\n";
    iris iris_cat[150], array_all[150], array_learn[120], array_test[30];
    double avg_se_len[3], avg_se_wid[3], avg_pet_len[3], avg_pet_wid[3];
    double sum_se_len[3], sum_se_wid[3], sum_pet_len[3], sum_pet_wid[3];
    double sumv_se_len[3], sumv_se_wid[3], sumv_pet_len[3], sumv_pet_wid[3];
    double sqt_se_len[3], sqt_se_wid[3], sqt_pet_len[3], sqt_pet_wid[3];
    //合計,合計の二乗,平均,標準偏差を計算する関数
    double a, b, c;
    int i,n;

    fp = fopen("iris.data", "r");
    if (fp == NULL)
    {
        printf("Not open file\n");
        exit(0);
    }
    for (i = 0; i < FORLOOP; i++)
    {
        iris_cat[i] = SetIris(iris_cat[i], fgets(line, sizeof(line), fp));
    }
    for (i = 0; i < FORLOOP; i++)
    {
        array_all[i] = iris_cat[i];
    }
    fclose(fp);

    printf("\n");
    shuffle(array_all, 150);
    for (i = 0; i < FORLOOP; i++)
    {
        printf("%d\n", i);
        PrintFunc(array_all[i]);
    }
    for (i = 0; i < 120; i++)
    {
        array_learn[i] = array_all[i];
        printf("%d\n", i);
        PrintFunc(array_learn[i]);
    }
    printf("\n");
    for (i = 120; i < FORLOOP; i++)
    {
        array_test[n] = array_all[i];
        printf("%d\n", n);
        PrintFunc(array_test[n]);
        n++;
    }

    return 0;
}