"use strict";

/* Функции (стрелочные функции) */

/* 1-ый вид функции FUNCTION DECLARATION - видна во всём коде как и var, можно вызывать до и после обьявления */

let num = 20;                       /* Глобальная переменная */
function showFirstMessage(text) { /* внутрь функции можно передать аргумент, его(их) пишут в скобках */
    console.log(text);
    let num = 10;   
    console.log(num);                   /* Обьявленние глобальной переменной внутри функции (НЕ ЛОКАЛЬНОЙ) */
    /* console.log будет искать изначально внутри функции, затем начнёт сначало документа пока не наткнётся на переменную num */
}

showFirstMessage('Hello world'); /* в скобках можно написать содержимое аргумента которое перейдёт внутрь функции */
console.log(num);


function calc(a, b) { /* 2 аргумента передаються в функцию , для выполнения определённой операции, в данном случае это сложение. */
    return (a + b); /* Помогает вернуть значение во внешний мир что бы передать в console.log */
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;

    return num; /* Вывод значение локальной переменной в глобальный */
}

const anotherNum = ret();
console.log(anotherNum);


/* 2-ой вид функции FUNCTION EXPRESSION - создаёться только тогда когда до неё доходит поток, нужно вызывать*/

const logger = function() {
    console.log("Hello");
};

logger();

/* 3-ий вид функции СТРЕЛОЧНЫЕ ФУНКЦИИ(ES6)- не имеет своего контекста (this) */

const calc = (a, b) => { return a + b;} /* переменная = (аргумент1, аргумент2) => {выполнение определённого кода} (если код функции идёт в одну строчку, то можно пускать фигурные скобки и обычные у аргументов, если аргумент 1) */