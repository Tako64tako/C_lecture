#include<stdio.h>
int main(){
    int min,max,n,x;
    printf("min&max&n?");
    scanf("%d %d %d",&min,&max,&n);

    for(int i = min;min < max;max--){
        if(max%n==0){
            x += max;
        }
    }
    printf("%d\n",x);
}