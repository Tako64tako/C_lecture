#include<stdio.h>

int main() {
    int dat[5]={1,3,5,7,9};
    int i,*p,*p2;

    p = &dat[0];
    p2 = dat;
    for(i=0;i <= 4; i++){
        printf("dat[%d]=%d,",i,dat[i]);
        printf("p[%d]=%d, *(p+%d) = %d,",i,p[i],i,*(p+i));
        printf("p2[%d]=%d,*(p2+%d)=%d\n",i,p2[i],i,*(p2+i));
    }
}