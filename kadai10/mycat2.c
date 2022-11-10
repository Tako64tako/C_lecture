#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    FILE *file;
    char c;

    if (argc != 2)
    {
        printf("The file was not found\n");
        exit(1);
    }

    if ((file = fopen(argv[1], "r")) == NULL)
    {
        printf("The file is empty\n");
        exit(1);
    }

    while (1)
    {
        c = (char)fgetc(file);
        if (feof(file) != 0)
            break;
        printf("%c", c);
    }

    fclose(file);

    return 0;
}