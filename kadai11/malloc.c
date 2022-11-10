#include<stdio.h>
#include<stdlib.h>

int main(){
    int *array;
    int num = 100;

    array = (int*)malloc(sizeof(int)*num);
    free(array);
    return 0;
}