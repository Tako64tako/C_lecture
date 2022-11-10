#include <stdio.h>  // ファイル名：rpcalc.c
#include <stdlib.h> // (文字・文字列に関する処理が 一部 穴埋めになっています)
#include <string.h>
#include <ctype.h>

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

void push(double data)
{ // 関数 push：スタックに 値 data を入れる
    if (sp < 100 - 1)
        stack[++sp] = data;
}

void readWord()
{          // 関数 readWord：文字列 line から 単語1個を取り出す
    int i; // (ただし 「単語」は 空白文字から空白文字まで)
    for (; line[pos] != '\0' && line[pos] == ' '; pos++)
        ;

    for (i = 0; line[pos] != ' ' && line[pos] != '\0';)
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
