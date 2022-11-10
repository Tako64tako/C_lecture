#include<stdio.h>
#include<ctype.h>

int main(){
    char str[] = "Hello,world! This is a message 4 U.\n";
    for(int i=0;str[i] != '\0';i++){
        if(islower(str[i])){
            printf("%cは英小文字です\n",str[i]);
        }else if(isupper(str[i])){
            printf("%cは英大文字です\n",str[i]);
        }else if(isspace(str[i])){
            printf("%cは空白です\n",str[i]);
        }else if(isdigit(str[i])){
            printf("%cは数字です\n",str[i]);
        }else if(isgraph(str[i])){
            printf("%cは（空白以外の）区切り文字です\n",str[i]);
        }else{
            printf("%cはその他の文字です\n",str[i]);
        }
    }
    return 0;
}