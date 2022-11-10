#include <stdio.h>
#include <stdlib.h>
#include <string.h>

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

int main(){
    iris iris1 = {6.7, 3.0, 5.2, 2.3, "Iris-virsinica"};
    iris iris2 = {7.0, 3.2, 4.7, 1.4, "Iris-versicolor"};
    printf("iris1data------------\n");
    PrintFunc(iris1);
    printf("\n");
    printf("iris2data-----------\n");
    PrintFunc(iris2);
    printf("\n");
}