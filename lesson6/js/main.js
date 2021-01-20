"use strict";

/* Условия в JS */
if( 4 == 9) {               /* Если */
    console.log('Ok!');     /* Вывод текста если условие верно */
}
else {                      /* Иначе */
    console.log('Error');   /* Вывод текста если условие не верно */
}

/* const num = 50;

if(num < 49) {
    console.log('Error');
}
else if (num > 100) {
    console.log('Слишком много');
}
else {
    console.log('Ok!');
}

(num === 50 ) ? console.log('Ok!') : console.log('Error'); */

/* Switch */

switch(num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log ('Неверно');
        break;
    case 50:
        console.log('В точку');
    default:
        console.log('Не в этот раз');
        break;
}

/* Switch END */