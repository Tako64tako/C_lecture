#include<stdio.h>

typedef struct{
    char name[20];
    int eng;
    int math;
    int phys;
    int total;
} std;

std inputData(){
    std tmp;

    printf("名前は？"); scanf("%s", tmp.name);
    printf("英語 ="); scanf("%d", &tmp.eng);
    printf("数学 ="); scanf("%d", &tmp.math);
    printf("物理 ="); scanf("%d" ,&tmp.phys);
    printf("\n\n");

    return(tmp);
}

std calcTotal(std x){
    x.total = x.eng + x.math + x.phys;
    printf("%d", x.total);
    return(x);
}

void printData(int i, std memuber){
    printf("出席番号 : %d \n", i);
    printf("名前: %s \n", memuber.name);
    printf("英語 : %d \n", memuber.eng);
    printf("数学 : %d \n", memuber.math);
    printf("物理: %d \n", memuber.phys);
    printf("総合得点 : %d \n", memuber.total);
}

int main(){
    int i;
    std myclass[8];
    for(i=1;i<=7;i++){
        myclass[i] = inputData();
    }
    for(i=1;i<=7;i++){
        myclass[i] = calcTotal(myclass[i]);
    }
    for(i=1;i<=7;i++){
        printData(i,myclass[i]);
    }
}