#include<stdio.h>
#include<ctype.h>
#include<stdlib.h>
#include<string.h>

// ポインタを使って書き直したもの
// int main(){
//     int i;
//     char str[100] = "The quick brown fox jumps lazy dog.";
//     char *ptr;
//         for(ptr = str; *ptr != '\0' ;ptr++){
//             *ptr = toupper(*ptr);
//         }
//     printf("変換後の文字列 = %s \n",str);
//     return 0;
//}
//          *string = toupper(*string)

int main(void){
    char *string;
    int i;
    string = (char *)malloc(sizeof(char)*100);
    if(string == NULL){
        printf("メモリが確保できません\n");
        exit(1);
    }
    strcpy(string, "The quick brown fox jumps lazy dog.");
    for (i=0; string[i] != '\0'; i++){
        string[i] = toupper(string[i]);
    }

        printf("変換後の文字列 = %s\n", string);
        free(string);
        return 0;
    }