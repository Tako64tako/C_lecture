#include<stdio.h>
int main(){
    int min,n,x,i;
    printf("min&n");
    scanf("%d %d",&min,&n);
        for(i=0;i<min;i++){
            if(i%n==0){
                x = i;
            }
        }
    printf("%d以上で最小の%dの倍数は%dである\n",min,n,x+n);
}