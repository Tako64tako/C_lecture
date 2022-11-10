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

int main()
{
    FILE *fp;
    char line[50] = "5.7,2.9,4.2,1.3,Iris-versicolor\n";
    iris iris_cat[150];
    iris sample = {5.7, 4.0, 1.2, 0.2};
    iris sample2 = {5.9, 2.9, 4.2, 1.5};
    iris sample3 = {5.6, 2.8, 4.8, 2.0};
    double avg_se_len[3], avg_se_wid[3], avg_pet_len[3], avg_pet_wid[3];
    double sum_se_len[3], sum_se_wid[3], sum_pet_len[3], sum_pet_wid[3];
    double sumv_se_len[3], sumv_se_wid[3], sumv_pet_len[3], sumv_pet_wid[3];
    double sqt_se_len[3], sqt_se_wid[3], sqt_pet_len[3], sqt_pet_wid[3];
    //合計,合計の二乗,平均,標準偏差を計算する関数
    double a, b, c,s[20];
    int i,y[5];
    char setosa[20] = "Iris-setosa\n", virginica[20] = "Iris-virginica\n", versicolor[20] = "Iris-versicolor\n";

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
    fclose(fp);

    for (i = 0; i < FORLOOP; i++)
    {
        if (strcmp(iris_cat[i].class, setosa) == 0)
        {
            sum_se_len[0] += iris_cat[i].sepal_length;
            sumv_se_len[0] += iris_cat[i].sepal_length * iris_cat[i].sepal_length;
            sum_se_wid[0] += iris_cat[i].sepal_width;
            sumv_se_wid[0] += iris_cat[i].sepal_width * iris_cat[i].sepal_width;
            sum_pet_len[0] += iris_cat[i].petal_length;
            sumv_pet_len[0] += iris_cat[i].petal_length * iris_cat[i].petal_length;
            sum_pet_wid[0] += iris_cat[i].petal_width;
            sumv_pet_wid[0] += iris_cat[i].petal_width * iris_cat[i].petal_width;
            a++;
        }
        else if (strcmp(iris_cat[i].class, versicolor) == 0)
        {
            sum_se_len[1] += iris_cat[i].sepal_length;
            sumv_se_len[1] += iris_cat[i].sepal_length * iris_cat[i].sepal_length;
            sum_se_wid[1] += iris_cat[i].sepal_width;
            sumv_se_wid[1] += iris_cat[i].sepal_width * iris_cat[i].sepal_width;
            sum_pet_len[1] += iris_cat[i].petal_length;
            sumv_pet_len[1] += iris_cat[i].petal_length * iris_cat[i].petal_length;
            sum_pet_wid[1] += iris_cat[i].petal_width;
            sumv_pet_wid[1] += iris_cat[i].petal_width * iris_cat[i].petal_width;
            b++;
        }
        else
        {
            sum_se_len[2] += iris_cat[i].sepal_length;
            sumv_se_len[2] += iris_cat[i].sepal_length * iris_cat[i].sepal_length;
            sum_se_wid[2] += iris_cat[i].sepal_width;
            sumv_se_wid[2] += iris_cat[i].sepal_width * iris_cat[i].sepal_width;
            sum_pet_len[2] += iris_cat[i].petal_length;
            sumv_pet_len[2] += iris_cat[i].petal_length * iris_cat[i].petal_length;
            sum_pet_wid[2] += iris_cat[i].petal_width;
            sumv_pet_wid[2] += iris_cat[i].petal_width * iris_cat[i].petal_width;
            c++;
        }
    }
    for (i = 0; i < 3; i++)
    {
        avg_se_len[i] = sum_se_len[i] / a;
        sqt_se_len[i] = sqrt(sumv_se_len[i] / a - avg_se_len[i] * avg_se_len[i]);
        avg_se_wid[i] = sum_se_wid[i] / a;
        sqt_se_wid[i] = sqrt(sumv_se_wid[i] / a - avg_se_wid[i] * avg_se_wid[i]);
        avg_pet_len[i] = sum_pet_len[i] / a;
        sqt_pet_len[i] = sqrt(sumv_pet_len[i] / a - avg_pet_len[i] * avg_pet_len[i]);
        avg_pet_wid[i] = sum_pet_wid[i] / a;
        sqt_pet_wid[i] = sqrt(sumv_pet_wid[i] / a - avg_pet_wid[i] * avg_pet_wid[i]);
    }

    for (i = 0; i < 3; i++)
    {
        s[i] = sqrt(pow(avg_se_len[i] - sample.sepal_length, 2.0) +
                    pow(avg_se_wid[i] - sample.sepal_width, 2.0) +
                    pow(avg_pet_len[i] - sample.petal_length, 2.0) +
                    pow(avg_pet_wid[i] - sample.petal_width, 2.0));
    }
    if (s[1] > s[0] && s[2] > s[0])
    {
        y[1] = 1;
    }
    else if (s[2] > s[1] && s[0] > s[1])
    {
        y[1] = 2;
    }
    else
    {
        y[1] = 3;
    }

    for (i = 0; i < 3; i++)
    {
        s[i] = sqrt(pow(avg_se_len[i] - sample2.sepal_length, 2.0) +
                    pow(avg_se_wid[i] - sample2.sepal_width, 2.0) +
                    pow(avg_pet_len[i] - sample2.petal_length, 2.0) +
                    pow(avg_pet_wid[i] - sample2.petal_width, 2.0));
    }
    if (s[1] > s[0] && s[2] > s[0])
    {
        y[2] = 1;
    }
    else if (s[2] > s[1] && s[0] > s[1])
    {
        y[2] = 2;
    }
    else
    {
        y[2] = 3;
    }

    for (i = 0; i < 3; i++)
    {
        s[i] = sqrt(pow(avg_se_len[i] - sample3.sepal_length, 2.0) +
                    pow(avg_se_wid[i] - sample3.sepal_width, 2.0) +
                    pow(avg_pet_len[i] - sample3.petal_length, 2.0) +
                    pow(avg_pet_wid[i] - sample3.petal_width, 2.0));
    }
    if (s[1] > s[0] && s[2] > s[0])
    {
        y[3] = 1;
    }
    else if (s[2] > s[1] && s[0] > s[1])
    {
        y[3] = 2;
    }
    else
    {
        y[3] = 3;
    }
    for (i = 1; i < 4; i++)
    {
        switch (y[i])
        {
        case 1:
            printf("%dつめのsampleはIris-setosa\n", i);
            break;
        case 2:
            printf("%dつめのsmapleはIris_vericolor\n", i);
            break;
        case 3:
            printf("%dつめのsampleはIris-versinca\n", i);
            break;
        };
    }
}