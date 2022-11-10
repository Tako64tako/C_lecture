#include <stdio.h>
#include <stdlib.h>

int main(void){
    int *data;
    int i;

    printf("sizeof(int)=%ld\n",sizeof(int));

    data = (int *)malloc(sizeof(int)*100);
    if(data ==NULL)
    exit(1);

    for(i=0;i<100;i++){
        data[i] = i*2;
    }
    for(i=0;i<100;i++){
        printf("data[%d]=%d\n",i,data[i]);
    }
    free(data);
    return 0;
}