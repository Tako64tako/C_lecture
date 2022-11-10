#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

typedef struct
{
    char book_number[915];
    char pokemon_name[915];
    char type1[915];
    char type2[915];
    int hp;
    int attack;
    int defense;
    int special_attack;
    int special_defense;
    int speed;
    int race;
} pok;

void PrintPok(pok data)
{
    printf("%-5s", data.book_number);
    printf(" %-16s", data.pokemon_name);
    printf(" \t%-16s", data.type1);
    printf(" \t%-16s", data.type2);
    printf("\t%-3d", data.hp);
    printf("  %-3d", data.attack);
    printf("  %-3d", data.defense);
    printf("  %-3d", data.special_attack);
    printf("  %-3d", data.special_defense);
    printf("  %-3d", data.speed);
    printf("  %-3d", data.race);
    printf("\n");
}

pok SetPok(pok data, char hoge[100])
{
    char *tmp;
    tmp = strtok(hoge, ",");
    strcpy(data.book_number, tmp);
    tmp = strtok(NULL, ",");
    strcpy(data.pokemon_name, tmp);
    tmp = strtok(NULL, ",");
    strcpy(data.type1, tmp);
    tmp = strtok(NULL, ",");
    strcpy(data.type2, tmp);
    tmp = strtok(NULL, ",");
    data.hp = atoi(tmp);
    tmp = strtok(NULL, ",");
    data.attack = atoi(tmp);
    tmp = strtok(NULL, ",");
    data.defense = atoi(tmp);
    tmp = strtok(NULL, ",");
    data.special_attack = atoi(tmp);
    tmp = strtok(NULL, ",");
    data.special_defense = atoi(tmp);
    tmp = strtok(NULL, ",");
    data.speed = atoi(tmp);
    tmp = strtok(NULL, "\n");
    data.race = atoi(tmp);
    return data;
}

int main()
{
    FILE *fp;
    int i, j, k, n, pok_count = 0, sum, size; //データの数を数える変数;
    int fals_count = 0, find_count = 0;       //該当するポケモンがいなかったときに使用する変数
    int type_count[20], save_count[6], values[914], m[6];
    int pokemon, poke, pok_sum, race_sum, race_count = 5; //次へすすむための変数
    char line[100] = "1 フシギダネ くさ どく 45 49 49 65 65 45 318";
    char pok_cat[914];
    char select_pok[20]; //ポケモン名の入力をゲットする関数
    double avg_hp, avg_attack, avg_defense, avg_special_attack, avg_special_defense, avg_speed, avg_race;
    double tmp, type_count2[20];
    //各ステータスの平均を計算する関数
    pok save_pok[6]; //ゲットしたポケモン名を保存しておく変数
    pok forg_pok[914];
    pok pok_find[914];

    srand((unsigned int)time(NULL));

    for (i = 0; i < 19; i++)
    {
        type_count[i] = 0;
    }

    fp = fopen("pokemon_status3.csv", "r");
    if (fp == NULL)
    {
        printf("Not open file\n");
        return -1;
    }

    while ((fgets(pok_cat, 256, fp)) != NULL)
    {
        pok_find[pok_count] = SetPok(pok_find[pok_count], pok_cat);
        pok_count++;
    }

    for (i = 0; i < pok_count; i++)
    {
        avg_hp += pok_find[i].hp;
        avg_attack += pok_find[i].attack;
        avg_defense += pok_find[i].defense;
        avg_special_attack += pok_find[i].special_attack;
        avg_special_defense += pok_find[i].special_defense;
        avg_speed += pok_find[i].speed;
        avg_race += pok_find[i].race;
    }

    avg_hp = avg_hp / pok_count;
    avg_attack = avg_attack / pok_count;
    avg_defense = avg_defense / pok_count;
    avg_special_attack = avg_special_attack / pok_count;
    avg_special_defense = avg_special_defense / pok_count;
    avg_speed = avg_speed / pok_count;
    avg_race = avg_race / pok_count;

    printf("エンターキーを押すことにより次へ進みます\n準備ができたらエンターキーを押してください▼\n");
    pokemon = getchar();
    printf("Oーキド博士「ポケットモンスターの世界へようこそ」▼");
    pokemon = getchar();
    printf("Oーキド博士「私はポケモンについて研究しているものだ」▼");
    pokemon = getchar();
    printf("Oーキド博士「ポケモンというものについては...既に色々知っとるようじゃな」▼");
    pokemon = getchar();
    printf("Oーキド博士「ポケモンというのは一度に6体まで手持ちにすることができる」▼");
    pokemon = getchar();
    printf("Oーキド博士「そこで、さっそくですまないんだがパーティーを考えて欲しいんじゃ」▼");
    pokemon = getchar();
    printf("Oーキド博士「なぁにそんなに心配することはないぞ」\n\t   「参考になるデータは用意してある」▼");
    pokemon = getchar();
    printf("Oーキド博士「ポケモンの表示のされ方はこんなもんじゃ」▼");
    pokemon = getchar();
    printf("\n図鑑番号 ポケモン名 タイプ1 タイプ2 HP  A  B  C  D  S race\n");
    printf("     1    フシギダネ  くさ    どく  45  49 49 65 65 45 318 ▼");
    pokemon = getchar();
    printf("\nOーキド博士「ポケモンの平均値はこんなもんじゃ」▼");
    pokemon = getchar();
    printf("平 HP\t攻撃\t防御\t特攻\t特防\t素早さ\t種族値(合計値)\n");
    printf("均 %0.1f\t%0.1f\t%0.1f\t%0.1f\t%0.1f\t%0.1f\t%0.1f▼",
           avg_hp, avg_attack, avg_defense, avg_special_attack, avg_special_defense, avg_speed, avg_race);
    pokemon = getchar();
    printf("Oーキド博士「見たらわかるがフシギダネは平均値より低い値を持っている」▼");
    pokemon = getchar();
    printf("Oーキド博士「このデータを参考にしながらポケモンを選んでいってくれ」▼");
    pokemon = getchar();
    printf("Oーキド博士「お主に合わせたおすすめのポケモンも選出されるから,選ぶポケモンに迷った時はオススメを選ぶといいぞ」▼");
    pokemon = getchar();
    printf("Oーキド博士「もしどんなポケモンがいるのか見たければ1を押して,見なくてもいいならそれ以外の数字を押してくれ」▼");
    pokemon = getchar();
    printf("1かそれ以外の数字を入力してくだい\n");
    scanf("%d", &poke);
    if (poke == 1)
    {
        for (i = 0; i < pok_count; i++)
        {
            PrintPok(pok_find[i]);
        }
        printf(" ");
        pokemon = getchar();
    }
    else
    {
        printf("Oーキド博士「ポケモンのデータは頭に入っているとは優秀じゃの」");
        pokemon = getchar();
    }

    printf("\nOーキド博士「それではパーティを考えていこう」▼");
    pokemon = getchar();

    fals_count = pok_count;
    while (fals_count == pok_count) //入力したポケモンが存在するまで回す
    {
        printf("１体目のポケモン名を入力してください（全角カタカナ）\n");
        scanf("%s", select_pok);
        fals_count = 0;
        for (i = 0; i < pok_count; i++)
        {
            if (strcmp(pok_find[i].pokemon_name, select_pok) == 0)
            {
                //PrintPok(pok_find[i]);
                save_pok[0] = pok_find[i];
                break;
                //入力したポケモンが存在しているかの処理
            }
            else
            {
                fals_count++;
            }
            //falseならばカウントを増やしていく
        }
        if (fals_count == pok_count)
        { //falseのカウントとデータの量が一緒ならばそのポケモンは存在しない処理を行う
            printf("Oーキド博士「該当するポケモンがいないようじゃの」\n");
            printf("Oーキド博士「もう一度入力し直してくれるかのう」\n");
        }
    }

    //入力したポケモンがいた場合の処理
    printf("あなたへのおすすめポケモンは...\n");
    for (i = 0; i < pok_count; i++)
    {
        if (save_pok[0].race < pok_find[i].race && pok_find[i].race <= save_pok[0].race + 20.0)
        {
            if (strcmp(save_pok[0].pokemon_name, pok_find[i].pokemon_name) != 0)
            {
                //PrintPok(pok_find[i]);
                forg_pok[j] = pok_find[i];
                j++;
            }
        }
        if (save_pok[0].race > pok_find[i].race && pok_find[i].race >= save_pok[0].race - 20.0)
        {
            if (strcmp(save_pok[0].pokemon_name, pok_find[i].pokemon_name) != 0)
            {
                //PrintPok(pok_find[i]);
                forg_pok[j] = pok_find[i];
                j++;
            }
        }
    }
    //printf("%d",j);

    for (i = 0; i < 5; i++)
    {
        k = rand() % j + 0;
        save_count[i] = k;
        if (save_count[i - 1] != k && save_count[i - 2] != k && save_count[i - 3] != k && save_count[i - 4] != k && save_count[i - 5] != k)
        {
            PrintPok(forg_pok[k]);
            find_count++;
        }
        //PrintPok(forg_pok[k]);
    }
    if (find_count == 0)
    {
        printf("おすすめポケモンが見つかりませんでした\n");
        printf("好きなポケモンを入力してください\n");
    }

    j = 0;
    fals_count = pok_count;
    find_count = 0;

    //２回目の処理
    while (fals_count == pok_count)
    {
        printf("２体目のポケモン名を入力してください(おすすめポケモンじゃなくても可)\n");
        scanf("%s", select_pok);
        fals_count = 0;
        for (i = 0; i < pok_count; i++)
        {
            if (strcmp(pok_find[i].pokemon_name, select_pok) == 0)
            {
                save_pok[1] = pok_find[i];
                break;
            }
            else
            {
                fals_count++;
            }
        }
        if (fals_count == pok_count)
        {
            printf("Oーキド博士「該当するポケモンがいないようじゃの」\n");
            printf("Oーキド博士「もう一度入力し直してくれるかのう」\n");
        }
    }

    printf("あなたへのおすすめポケモンは...\n");
    for (i = 0; i < pok_count; i++)
    {
        if ((save_pok[1].race + save_pok[0].race) / 2 < pok_find[i].race && pok_find[i].race <= (save_pok[1].race + save_pok[0].race) / 2 + 20.0)
        {
            if (strcmp(save_pok[1].pokemon_name, pok_find[i].pokemon_name) != 0)
            {
                forg_pok[j] = pok_find[i];
                j++;
            }
            find_count++;
        }
        if ((save_pok[1].race + save_pok[0].race) / 2 > pok_find[i].race && pok_find[i].race >= (save_pok[1].race + save_pok[0].race) / 2 - 20.0)
        {
            if (strcmp(save_pok[1].pokemon_name, pok_find[i].pokemon_name) != 0)
            {
                forg_pok[j] = pok_find[i];
                j++;
            }
            find_count++;
        }
    }

    for (i = 0; i < 5; i++)
    {
        k = rand() % j + 0;
        save_count[i] = k;
        if (save_count[i - 1] != k && save_count[i - 2] != k && save_count[i - 3] != k && save_count[i - 4] != k && save_count[i - 5] != k)
        {
            PrintPok(forg_pok[k]);
            find_count++;
        }
        //PrintPok(forg_pok[k]);
    }
    if (find_count == 0)
    {
        printf("おすすめポケモンが見つかりませんでした\n");
        printf("好きなポケモンを入力してください\n");
    }

    j = 0;
    fals_count = pok_count;
    find_count = 0;
    //３回目の処理
    while (fals_count == pok_count)
    {
        printf("３体目のポケモン名を入力してください(おすすめポケモンじゃなくても可)\n");
        scanf("%s", select_pok);
        fals_count = 0;
        for (i = 0; i < pok_count; i++)
        {
            if (strcmp(pok_find[i].pokemon_name, select_pok) == 0)
            {
                //PrintPok(pok_find[i]);
                save_pok[2] = pok_find[i];
                break;
            }
            //入力したポケモンが存在しているかの処理
            else
            {
                fals_count++;
            }
        }
        if (fals_count == pok_count)
        {
            printf("Oーキド博士「該当するポケモンがいないようじゃの」\n");
            printf("Oーキド博士「もう一度入力し直してくれるかのう」\n");
        }
    }

    printf("あなたへのおすすめポケモンは...\n");
    for (i = 0; i < pok_count; i++)
    {
        if ((save_pok[2].race + save_pok[1].race + save_pok[0].race) / 3 < pok_find[i].race && pok_find[i].race <= (save_pok[2].race + save_pok[1].race + save_pok[0].race) / 3 + 20.0)
        {
            if (strcmp(save_pok[1].pokemon_name, pok_find[i].pokemon_name) != 0)
            {
                //PrintPok(pok_find[i]);
                forg_pok[j] = pok_find[i];
                j++;
            }
            find_count++;
        }
        if ((save_pok[2].race + save_pok[1].race + save_pok[0].race) / 3 > pok_find[i].race && pok_find[i].race >= (save_pok[2].race + save_pok[1].race + save_pok[0].race) / 3 - 20.0)
        {
            if (strcmp(save_pok[2].pokemon_name, pok_find[i].pokemon_name) != 0)
            {
                //PrintPok(pok_find[i]);
                forg_pok[j] = pok_find[i];
                j++;
            }
            find_count++;
        }
    }

    for (i = 0; i < 5; i++)
    {
        k = rand() % j + 0;
        save_count[i] = k;
        if (save_count[i - 1] != k && save_count[i - 2] != k && save_count[i - 3] != k && save_count[i - 4] != k && save_count[i - 5] != k)
        {
            PrintPok(forg_pok[k]);
            find_count++;
        }
    }
    if (find_count == 0)
    {
        printf("おすすめポケモンが見つかりませんでした\n");
        printf("好きなポケモンを入力してください\n");
    }

    j = 0;
    fals_count = pok_count;
    find_count = 0;
    //４回目の処理

    while (fals_count == pok_count)
    {
        printf("４体目のポケモン名を入力してください(おすすめポケモンじゃなくても可)\n");
        scanf("%s", select_pok);
        fals_count = 0;
        for (i = 0; i < pok_count; i++)
        {
            if (strcmp(pok_find[i].pokemon_name, select_pok) == 0)
            {
                //PrintPok(pok_find[i]);
                save_pok[3] = pok_find[i];
                break;
            }
            //入力したポケモンが存在しているかの処理
            else
            {
                fals_count++;
            }
        }
        if (fals_count == pok_count)
        {
            printf("Oーキド博士「該当するポケモンがいないようじゃの」\n");
            printf("Oーキド博士「もう一度入力し直してくれるかのう」\n");
        }
    }

    printf("あなたへのおすすめポケモンは...\n");
    for (i = 0; i < pok_count; i++)
    {
        if ((save_pok[3].race + save_pok[2].race + save_pok[1].race + save_pok[0].race) / 4 < pok_find[i].race && pok_find[i].race <= (save_pok[3].race + save_pok[2].race + save_pok[1].race + save_pok[0].race) / 4 + 20.0)
        {
            if (strcmp(save_pok[3].pokemon_name, pok_find[i].pokemon_name) != 0)
            {
                //PrintPok(pok_find[i]);
                forg_pok[j] = pok_find[i];
                j++;
            }
            find_count++;
        }
        if ((save_pok[3].race + save_pok[2].race + save_pok[1].race + save_pok[0].race) / 4 > pok_find[i].race && pok_find[i].race >= (save_pok[3].race + save_pok[2].race + save_pok[1].race + save_pok[0].race) / 4 - 20.0)
        {
            if (strcmp(save_pok[1].pokemon_name, pok_find[i].pokemon_name) != 0)
            {
                //PrintPok(pok_find[i]);
                forg_pok[j] = pok_find[i];
                j++;
            }
            find_count++;
        }
    }

    for (i = 0; i < 5; i++)
    {
        k = rand() % j + 0;
        save_count[i] = k;
        if (save_count[i - 1] != k && save_count[i - 2] != k && save_count[i - 3] != k && save_count[i - 4] != k && save_count[i - 5] != k)
        {
            PrintPok(forg_pok[k]);
            find_count++;
        }
        //PrintPok(forg_pok[k]);
    }
    if (find_count == 0)
    {
        printf("おすすめポケモンが見つかりませんでした\n");
        printf("好きなポケモンを入力してください\n");
    }

    j = 0;
    fals_count = pok_count;
    find_count = 0;
    //5回目の処理
    while (fals_count == pok_count)
    {
        printf("5体目のポケモン名を入力してください(おすすめポケモンじゃなくても可)\n");
        scanf("%s", select_pok);
        fals_count = 0;
        for (i = 0; i < pok_count; i++)
        {
            if (strcmp(pok_find[i].pokemon_name, select_pok) == 0)
            {
                save_pok[4] = pok_find[i];
                break;
            }
            else
            {
                fals_count++;
            }
        }
        if (fals_count == pok_count)
        {
            printf("Oーキド博士「該当するポケモンがいないようじゃの」\n");
            printf("Oーキド博士「もう一度入力し直してくれるかのう」\n");
        }
    }

    printf("あなたへのおすすめポケモンは...\n");
    for (i = 0; i < pok_count; i++)
    {
        if ((save_pok[4].race + save_pok[3].race + save_pok[2].race + save_pok[1].race + save_pok[0].race) / 5 <
                pok_find[i].race &&
            pok_find[i].race <= (save_pok[4].race + save_pok[3].race + save_pok[2].race + save_pok[1].race + save_pok[0].race) / 5 + 20.0)
        {
            if (strcmp(save_pok[4].pokemon_name, pok_find[i].pokemon_name) != 0)
            {
                //PrintPok(pok_find[i]);
                forg_pok[j] = pok_find[i];
                j++;
            }
            find_count++;
        }
        if ((save_pok[4].race + save_pok[3].race + save_pok[2].race + save_pok[1].race + save_pok[0].race) / 5 > pok_find[i].race && pok_find[i].race >= (save_pok[4].race + save_pok[3].race + save_pok[2].race + save_pok[1].race + save_pok[0].race) / 5 - 20.0)
        {
            if (strcmp(save_pok[1].pokemon_name, pok_find[i].pokemon_name) != 0)
            {
                //PrintPok(pok_find[i]);
                forg_pok[j] = pok_find[i];
                j++;
            }
            find_count++;
        }
    }

    for (i = 0; i < 5; i++)
    {
        k = rand() % j + 0;
        save_count[i] = k;
        if (save_count[i - 1] != k && save_count[i - 2] != k && save_count[i - 3] != k && save_count[i - 4] != k && save_count[i - 5] != k)
        {
            PrintPok(forg_pok[k]);
            find_count++;
        }
        //PrintPok(forg_pok[k]);
    }
    if (find_count == 0)
    {
        printf("おすすめポケモンが見つかりませんでした\n");
        printf("好きなポケモンを入力してください\n");
    }

    j = 0;
    fals_count = pok_count;
    find_count = 0;
    //6回目の処理
    while (fals_count == pok_count)
    {
        printf("6体目のポケモン名を入力してください(おすすめポケモンじゃなくても可)\n");
        scanf("%s", select_pok);
        fals_count = 0;
        for (i = 0; i < pok_count; i++)
        {
            if (strcmp(pok_find[i].pokemon_name, select_pok) == 0)
            {
                save_pok[5] = pok_find[i];
                break;
            }
            else
            {
                fals_count++;
            }
        }
        if (fals_count == pok_count)
        {
            printf("Oーキド博士「該当するポケモンがいないようじゃの」\n");
            printf("Oーキド博士「もう一度入力し直してくれるかのう」\n");
        }
    }

    printf("あなたへのおすすめポケモンは...\n");
    for (i = 0; i < pok_count; i++)
    {
        if ((save_pok[5].race + save_pok[4].race + save_pok[3].race + save_pok[2].race + save_pok[1].race + save_pok[0].race) / 6 < pok_find[i].race && pok_find[i].race <= (save_pok[5].race + save_pok[4].race + save_pok[3].race + save_pok[2].race + save_pok[1].race + save_pok[0].race) / 6 + 20.0)
        {
            if (strcmp(save_pok[5].pokemon_name, pok_find[i].pokemon_name) != 0)
            {
                forg_pok[j] = pok_find[i];
                j++;
            }
            find_count++;
        }
        if ((save_pok[5].race + save_pok[4].race + save_pok[3].race + save_pok[2].race + save_pok[1].race + save_pok[0].race) / 6 > pok_find[i].race && pok_find[i].race >= (save_pok[5].race + save_pok[4].race + save_pok[3].race + save_pok[2].race + save_pok[1].race + save_pok[0].race) / 6 - 20.0)
        {
            if (strcmp(save_pok[5].pokemon_name, pok_find[i].pokemon_name) != 0)
            {
                //PrintPok(pok_find[i]);
                forg_pok[j] = pok_find[i];
                j++;
            }
            find_count++;
        }
    }

    for (i = 0; i < 5; i++)
    {
        k = rand() % j + 0;
        save_count[i] = k;
        if (save_count[i - 1] != k && save_count[i - 2] != k && save_count[i - 3] != k && save_count[i - 4] != k && save_count[i - 5] != k)
        {
            PrintPok(forg_pok[k]);
            find_count++;
        }
    }
    if (find_count == 0)
    {
        printf("おすすめポケモンが見つかりませんでした\n");
        printf("好きなポケモンを入力してください\n");
    }

    printf("\nあなたの選んだパーティーは\n");
    for (i = 0; i < 6; i++)
    {
        PrintPok(save_pok[i]);
    }

    for (i = 0; i < 6; i++)
    {
        if (strcmp(save_pok[i].type1, "ノーマル") == 0)
        {
            type_count[0] += 1;
        }
        if (strcmp(save_pok[i].type1, "ほのお") == 0)
        {
            type_count[1] += 1;
        }
        if (strcmp(save_pok[i].type1, "みず") == 0)
        {
            type_count[2] += 1;
        }
        if (strcmp(save_pok[i].type1, "でんき") == 0)
        {
            type_count[3] += 1;
        }
        if (strcmp(save_pok[i].type1, "くさ") == 0)
        {
            type_count[4] += 1;
        }
        if (strcmp(save_pok[i].type1, "こおり") == 0)
        {
            type_count[5] += 1;
        }
        if (strcmp(save_pok[i].type1, "かくとう") == 0)
        {
            type_count[6] += 1;
        }
        if (strcmp(save_pok[i].type1, "どく") == 0)
        {
            type_count[7] += 1;
        }
        if (strcmp(save_pok[i].type1, "じめん") == 0)
        {
            type_count[8] += 1;
        }
        if (strcmp(save_pok[i].type1, "ひこう") == 0)
        {
            type_count[9] += 1;
        }
        if (strcmp(save_pok[i].type1, "エスパー") == 0)
        {
            type_count[10] += 1;
        }
        if (strcmp(save_pok[i].type1, "むし") == 0)
        {
            type_count[11] += 1;
        }
        if (strcmp(save_pok[i].type1, "いわ") == 0)
        {
            type_count[12] += 1;
        }
        if (strcmp(save_pok[i].type1, "ゴースト") == 0)
        {
            type_count[13] += 1;
        }
        if (strcmp(save_pok[i].type1, "ドラゴン") == 0)
        {
            type_count[14] += 1;
        }
        if (strcmp(save_pok[i].type1, "あく") == 0)
        {
            type_count[15] += 1;
        }
        if (strcmp(save_pok[i].type1, "はがね") == 0)
        {
            type_count[16] += 1;
        }
        if (strcmp(save_pok[i].type1, "フェアリー") == 0)
        {
            type_count[17] += 1;
        }
        if (strcmp(save_pok[i].type1, "なし") == 0)
        {
            type_count[18] += 1;
        }

        if (strcmp(save_pok[i].type2, "ノーマル") == 0)
        {
            type_count[0] += 1;
        }
        if (strcmp(save_pok[i].type2, "ほのお") == 0)
        {
            type_count[1] += 1;
        }
        if (strcmp(save_pok[i].type2, "みず") == 0)
        {
            type_count[2] += 1;
        }
        if (strcmp(save_pok[i].type2, "でんき") == 0)
        {
            type_count[3] += 1;
        }
        if (strcmp(save_pok[i].type2, "くさ") == 0)
        {
            type_count[4] += 1;
        }
        if (strcmp(save_pok[i].type2, "こおり") == 0)
        {
            type_count[5] += 1;
        }
        if (strcmp(save_pok[i].type2, "かくとう") == 0)
        {
            type_count[6] += 1;
        }
        if (strcmp(save_pok[i].type2, "どく") == 0)
        {
            type_count[7] += 1;
        }
        if (strcmp(save_pok[i].type2, "じめん") == 0)
        {
            type_count[8] += 1;
        }
        if (strcmp(save_pok[i].type2, "ひこう") == 0)
        {
            type_count[9] += 1;
        }
        if (strcmp(save_pok[i].type2, "エスパー") == 0)
        {
            type_count[10] += 1;
        }
        if (strcmp(save_pok[i].type2, "むし") == 0)
        {
            type_count[11] += 1;
        }
        if (strcmp(save_pok[i].type2, "いわ") == 0)
        {
            type_count[12] += 1;
        }
        if (strcmp(save_pok[i].type2, "ゴースト") == 0)
        {
            type_count[13] += 1;
        }
        if (strcmp(save_pok[i].type2, "ドラゴン") == 0)
        {
            type_count[14] += 1;
        }
        if (strcmp(save_pok[i].type2, "あく") == 0)
        {
            type_count[15] += 1;
        }
        if (strcmp(save_pok[i].type2, "はがね") == 0)
        {
            type_count[16] += 1;
        }
        if (strcmp(save_pok[i].type2, "フェアリー") == 0)
        {
            type_count[17] += 1;
        }
        if (strcmp(save_pok[i].type2, "なし") == 0)
        {
            type_count[18] += 1;
        }
    }

    pok_sum = 0;
    printf("Oーキド博士「選んでくれてありがとう」\n");
    printf("Oーキド博士「ここからは入力してくれたデータをもとにワシ基準で評価をしよう」▼\n");
    pokemon = getchar();
    printf("Oーキド博士「お主の選んだポケモンのタイプはこんなバランスになっておる」▼");
    pokemon = getchar();
    printf("無 炎 水 電 草 氷 格 毒 地 飛 超 虫 岩 霊 竜 悪 鋼 妖\n");
    for (i = 0; i < 18; i++)
    {
        printf("%d  ", type_count[i]);
        if (type_count[i] >= 2)
        {
            pok_sum = 1;
        }
        if (type_count[i] >= pok_sum)
        {
            pok_sum = 2;
        }
        if (type_count[i] >= pok_sum)
        {
            pok_sum = 3;
        }
        if (type_count[i] >= pok_sum)
        {
            pok_sum = 4;
        }
        if (type_count[i] >= pok_sum)
        {
            pok_sum = 5;
        }
        else{
            pok_sum = 0;
        }
    }

    printf("▼");
    pokemon = getchar();

    switch (pok_sum)
    {
    case 0:
        printf("Oーキド博士「タイプ相性は完璧じゃ」\n");
        break;
    case 1:
        printf("Oーキド博士「タイプ相性はほとんど完璧じゃ」\n");
        break;
    case 2:
        printf("Oーキド博士「タイプ相性はいいようじゃな」\n");
        break;
    case 3:
        printf("Oーキド博士「タイプ相性は普通なようじゃな」\n");
        break;
    case 4:
        printf("Oーキド博士「少しタイプに偏りがあるみたいじゃな」\n");
        break;
    case 5:
        printf("Oーキド博士「タイプ統一とは面白い!!」\n");
        break;
    }

    for (i = 0; i < 6; i++)
    {
        race_sum += save_pok[i].race;
    }
    race_sum = race_sum / 6;

    if (race_sum >= 200)
    {
        race_count = 4;
    }
    if (race_sum >= 300)
    {
        race_count = 3;
    }
    if (race_sum >= 400)
    {
        race_count = 2;
    }
    if (race_sum >= 500)
    {
        race_count = 1;
    }
    if (race_sum >= 600)
    {
        race_count = 0;
    }

    printf("Oーキド博士「選んだポケモンの種族値の平均じゃ」▼");
    pokemon = getchar();
    printf("種族値の平均 : %d ▼", race_sum);
    pokemon = getchar();

    switch (race_count)
    {
    case 0:
        printf("Oーキド博士「強いポケモンを選んだのう」\n");
        break;
    case 1:
        printf("Oーキド博士「なかなか強いポケモンを選んだのう」\n");
        break;
    case 2:
        printf("Oーキド博士「バランスの取れたポケモンを選んだのう」\n");
        break;
    case 3:
        printf("Oーキド博士「能力値だけがポケモンじゃないぞ」\n");
        break;
    case 4:
        printf("Oーキド博士「少し能力値が低いポケモンが多いようじゃの」\n");
        break;
    case 5:
        printf("Oーキド博士「そんなに弱いポケモンばかり選んでどうするんじゃ？」\n");
        break;
    }

    printf("Oーキド博士「ワシからの最終評価じゃ」▼");
    pokemon = getchar();
    printf("Oーキド博士「S A B C D E の順で評価をつけるぞ」▼");
    pokemon = getchar();
    printf("Oーキド博士「お主の選んだポケモンの最終評価は...」▼");
    pokemon = getchar();

    pok_sum = race_count + pok_sum;
    switch (pok_sum)
    {
    case 0:
        printf("Oーキド博士「Sランクじゃ」\n");
        break;
    case 1:
        printf("Oーキド博士「Aランクじゃ」\n");
        break;
    case 2:
        printf("Oーキド博士「Aランクじゃ」\n");
        break;
    case 3:
        printf("Oーキド博士「Bランクじゃ」\n");
        break;
    case 4:
        printf("Oーキド博士「Bランクじゃ」\n");
        break;
    case 5:
        printf("Oーキド博士「Cランクじゃ」\n");
        break;
    case 6:
        printf("Oーキド博士「Cランクじゃ」\n");
        break;
    case 7:
        printf("Oーキド博士「Dランクじゃ」\n");
        break;
    case 8:
        printf("Oーキド博士「Dランクじゃ」\n");
        break;
    case 9:
        printf("Oーキド博士「Eランクじゃ」\n");
        break;
    case 10:
        printf("Oーキド博士「Eランクじゃ」\n");
        break;
    }

    fclose(fp);
    return 0;
}