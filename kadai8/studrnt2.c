#include<stdio.h>
#include<string.h>

struct student{
    char name[20];
    int eng;
    int math;
};

int main(){
    struct student  alice,carol;
    struct student  bob={"Bob",90,88};

    strcpy(alice.name,"Alice");
    alice.eng = 80;
    alice.math = 73;

    printf("名前    = %s\n", alice.name);
    printf("英語    = %d\n", alice.eng);
    printf("数学    = %d\n", alice.math);
    printf("合計得点 = %d\n", alice.eng+alice.math);

    strcpy(carol.name, "Carol");
    carol.eng = 80;
    carol.math = 73;

    printf("名前    = %s\n", carol.name);
    printf("英語    = %d\n", carol.eng);
    printf("数学    = %d\n", carol.math);
    printf("合計得点 = %d\n", carol.eng + carol.math);

    printf("名前    = %s\n", bob.name);
    printf("英語    = %d\n", bob.eng);
    printf("数学    = %d\n", bob.math);
    printf("合計得点 = %d\n", bob.eng + bob.math);

    return 0;
}