#include<stdio.h>
#include<stdlib.h>
#include<ctype.h>
#include<string.h>
#include<math.h>

double stack[100];        // 配列変数 stack：スタックを表す
char line[256], tmp[256]; // 配列変数 line および tmp：式を表す文字列を格納
int sp, pos;              // 変数 sp および pos：スタック および 文字列処理用

double pop()
{ // 関数 pop：スタックから値を取り出す
    if (sp > 0)
        return (stack[sp--]);
    else
        return (0);
}

void push(double data){
    if (sp < 100 - 1)
        stack[++sp] = data;
}

void readWord()
{
    int i;
    for (; line[pos] != '\0' && isspace(line[pos]);pos++)
        ;
    for (i = 0; isspace(line[pos]) && line[pos] != '\0';)
        tmp[i++] = line[pos++];
    tmp[i] = '\0';
}

int main()
{
    double a, b;
    printf("入力例: 1 1 + \nBを入力で終了\n");
    sp = 0;
    while (1)
    {
        printf("式を入力:");
        fgets(line, 256, stdin); // キーボードから 255文字以内 の文字列を読み line に格納
        pos = 0;

        while (1)
        {
            readWord();
            if (strcmp(tmp, "") == 0)
                break;
            else if (strcmp(tmp, "") == '+')
            {
                a = pop();
                b = pop();
                push(b + a);
            }
            else if (strcmp(tmp, "") == '-')
            {
                a = pop();
                b = pop();
                push(b - a);
            }
            else if (strcmp(tmp, "") == '*')
            {
                a = pop();
                b = pop();
                push(b * a);
            }
            else if (strcmp(tmp, "") == '/')
            {
                a = pop();
                b = pop();
                push(b / a);
            }
            else if (strcmp(tmp, "break") == 0)
            {
                return 0;
            }
            else
                push(atof(tmp));
        }
        printf("ans:%f\n", pop());
    }

    return 0;
}