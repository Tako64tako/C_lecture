#include <stdio.h>
#include <ctype.h>

int main()
{
    char c;

    while (1)
    {
        c = (int)fgetc(stdin);

        if (feof(stdin) != 0)
            break;

        fputc(tolower((int)c), stdout);
    }
    printf("\n");
}