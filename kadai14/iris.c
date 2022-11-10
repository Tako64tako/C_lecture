#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>
#include <time.h>

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
    srand((unsigned int)time(NULL));
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
    double s[20], x = 100, iris_set[150], fuga[30];
    int y[5], i, j, n = 5, k, hage[30], num, tmp, sum;
    double tru = 0, con = 0, per = 0, a;
    char setosa[20] = "Iris-setosa\n", virginica[20] = "Iris-virginica\n", versicolor[20] = "Iris-versicolor\n";
    int no[10][10];
    double suma[3];

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
        num++;
    }
    fclose(fp);

    shuffle(array_all, 150);

    sum = n;
    n = num / n;
    k = 0;

    for (i = 0; i < n * k; i++)
    {
        array_learn[i] = array_all[i];
    }
    for (i = n * k; i < n * (k + 1); i++)
    {
        array_test[i - (n * k)] = array_all[i];
    }
    for (i = n * (k + 1); i < num; i++)
    {
        array_learn[i - (n * (k + 1)) + n * k] = array_all[i];
    }

    for (k = 0; k < sum; k++)
    {
        tru = 0;
        con = 0;
        for (i = 0; i < n; i++)
        {
            fuga[i] = 100;
            for (j = 0; j < num - n; j++)
            {
                iris_set[j] = sqrt(pow(array_learn[j].sepal_length - array_test[i].sepal_length, 2.0) +
                                       pow(array_learn[j].sepal_width - array_test[i].sepal_width, 2.0) +
                                       pow(array_learn[j].petal_length - array_test[i].petal_length, 2.0) +
                                       pow(array_learn[j].petal_width - array_test[i].petal_width, 2.0));
                if (fuga[i] > iris_set[j])
                {
                    fuga[i] = iris_set[j];
                    tmp = j;
                }
            }

            if (strcmp(array_test[i].class, array_learn[tmp].class) == 0)
            {
                tru++;
                if (strcmp(array_test[i].class, setosa) == 0)
                {
                    no[0][0] += 1;
                }
                else if (strcmp(array_test[i].class, versicolor) == 0)
                {
                    no[1][1] += 1;
                }
                else
                {
                    no[2][2] += 1;
                }
            }
            else
            {
                if (strcmp(array_test[i].class, setosa) == 0)
                {
                    if (strcmp(array_learn[tmp].class, versicolor) == 0)
                    {
                        no[0][2] += 1;
                    }
                    else if (strcmp(array_learn[n].class, virginica) == 0)
                    {
                        no[0][1] += 1;
                    }
                }
                else if (strcmp(array_test[i].class, versicolor) == 0)
                {
                    if (strcmp(array_learn[tmp].class, setosa) == 0)
                    {
                        no[1][0] += 1;
                    }
                    else if (strcmp(array_learn[tmp].class, virginica) == 0)
                    {
                        no[1][2] += 1;
                    }
                }
                else
                {
                    if (strcmp(array_learn[tmp].class, versicolor) == 0)
                    {
                        no[2][1] += 1;
                    }
                    else if (strcmp(array_learn[tmp].class, setosa) == 0)
                    {
                        no[2][0] += 1;
                    }
                }
            }
            con++;
            //printf("推定: %s %s :正解\n", array_test[n].class, array_test[i].class);
        }
        per = (tru / con) * 100;
        printf("正解率:%f%%\n", per);

        for (i = 0; i < 3; i++)
        {
            for (j = 0; j < 3; j++)
            {
                suma[i] += no[i][j];
            }
        }
        printf("\t\t\t\t推定\n");
        printf("\t\tsetosa\t\tvirginica\tversicolor\n");
        for (i = 0; i < 3; i++)
        {
            switch (i)
            {
            case 0:
                printf("正");
                printf("     setosa:");
                break;
            case 1:
                printf("解");
                printf("  virginica:");
                break;
            case 2:
                printf("   versicolor:");
                break;
            }
            for (j = 0; j < 3; j++)
            {
                a = (no[i][j] / suma[i]) * 100;
                printf("\t%f%%", a);
            }
            printf("\n");
        }
    }
    return 0;
}