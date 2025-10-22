#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

int main(void)
{
    int length = 6;
    char choice = 'n';

    printf("OTP length (default 6): ");
    if (scanf("%d", &length) != 1 || length <= 0 || length > 64)
    {
        length = 6;
    }

    // consume leftover newline before reading next char
    int ch = getchar();
    while (ch != '\n' && ch != EOF)
        ch = getchar();

    printf("Alphanumeric? (y/N): ");
    choice = getchar();
    if (choice != 'y' && choice != 'Y')
        choice = 'n';

    const char *digits = "0123456789";
    const char *alnum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const char *charset = (choice == 'y' ? alnum : digits);

    size_t cslen = strlen(charset);
    char *otp = malloc((size_t)length + 1);
    if (!otp)
        return 1;

    srand((unsigned)(time(NULL) ^ (clock() << 16)));
    for (int i = 0; i < length; ++i)
    {
        otp[i] = charset[rand() % cslen];
    }
    otp[length] = '\0';

    printf("Generated OTP: %s\n", otp);
    free(otp);
    return 0;
}