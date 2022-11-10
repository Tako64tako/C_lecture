#include <stdio.h>

void f(int x){
    x = 1;
}
void g(int *p){
    *p = 1;
}
int main(){
    int i = 0;

    f(i);
    printf("%d\n",i);
    g(&i);
    printf("%d\n",i);

    return 0;
}