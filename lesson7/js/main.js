"use strict";

/* Циклы */
/* Повторение цикла - это итерация */
const num = 50;

while (num < 55) {      /* пока не выполняеться условие цикл будет работать */
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num<55);

for (let i = 1; i < 8; i++) {   /* Начало цикла; до какого момента работает цикл; действие при каждой итерации */
    if(i===6) {
        continue;
    }
    console.log(i);
}