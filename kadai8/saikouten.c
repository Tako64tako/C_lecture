#include<stdio.h>
#include<string.h>

typedef struct{
    char name[20];
    int eng;
    int math;
} std;

int main(){
    int i,maxID;

    std myclass[8] = {
        {"",0,0},
        {"Alice",80,73},
        {"Bob",90,88},
        {"Carol",72,95},
        {"Dave",82,65},
        {"Emma",100,89},
        {"Fred",88,84},
        {"Gina",93,71}
    };
    for(i=0;i<=7;i++){
        if (myclass[i].eng + myclass[i].math >= myclass[i-1].eng + myclass[i-1].math){
            myclass[maxID] = myclass[i];
        }
    }

    printf("最高得点者は %s です（合計得点=%d点）\n",
        myclass[maxID].name,
        myclass[maxID].eng+myclass[maxID].math);
    return 0;
}