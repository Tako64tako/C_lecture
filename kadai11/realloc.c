#include<stdio.h>
#include<stdlib.h>

int main(){
    int *array,*tmp;
    array = (int*)malloc(sizeof(int)*5);
    tmp = (int*)realloc(array,sizeof(int)*100);
    if(NULL == tmp){
        exit(1);
    }
    array = tmp;
    free(array);
}