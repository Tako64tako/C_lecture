#include<stdio.h>

int mystrcmp(char str1[], char str2[]){
    int i;
    int ans=0;
    for(i=0; str1[i] != '\0' || str2[i] != '\0';i++){
        if(str1[i] != str2[i]){
            ans = 1;
        }
    }
    return ans;
}

int main(){
    char s1[] = "abcde";
    char s2[] = "abcde";
    char s3[] = "abcdef";

    if(mystrcmp(s1,s2)==0){
        printf("%s と %s は同じです\n",s1,s2);
    }else{
        printf("%s と %s は違います\n",s1,s2);
    }
    if(mystrcmp(s1,s3)==0){
        printf("%s と %s は同じです\n",s1,s3);
    }else{
        printf("%s と %s は違います\n",s1,s3);
    }
    return 0;
}