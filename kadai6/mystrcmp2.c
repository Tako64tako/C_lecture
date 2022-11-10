#include<stdio.h>
#include<ctype.h>

int mystrcmp(char str1[], char str2[]){
    int i,ans=0;
    char tmp,pmp;
    for(i=0; str1[i] != '\0' || str2[i] != '\0';i++){
        pmp = toupper(str1[i]);
        tmp = toupper(str2[i]);
        if(pmp != tmp){
            ans = 1;
        }
    }
    return ans;
}

int main(){
    char s1[] = "ABCde";
    char s2[] = "abcde";
    char s3[] = "abcdefg";

    if(mystrcmp(s1,s2)==0){
        printf("%s と %s 英大文字と英小文字の違いを無視しては同じです\n",s1,s2);
    }else{
        printf("%s と %s 英大文字と英小文字の違いを無視しては違います\n",s1,s2);
    }
    if(mystrcmp(s1,s3)==0){
        printf("%s と %s 英大文字と英小文字の違いを無視しては同じです\n",s1,s3);
    }else{
        printf("%s と %s 英大文字と英小文字の違いを無視しては違います\n",s1,s3);
    }
    return 0;
}