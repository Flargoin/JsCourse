"use strict"; /* Строгий режим, современный режим */

/* Переменные */

/*
Обзязательно знать:
Не могут начинаться с цифр и знаков кроме "$" и "_"
Не могут называть зарезервированными словами языка , вроде "alert" "error" и т.д
Называть переменные на англ.языке
Называть переменные по смыслу 
Использововать camelCase
const- константа которую после обьявления нельзя изменить (можно)
Прямых констант не бывает (изменить можно)
Строгий режим обязательно прописывать в начале документа или в начале функции
*/

let number = 5; /* Обьявление переменной let , в будущем возможно изменить значение переменной*/

const leftBorderWidth = 1; /* Обьявление переменной const - константа которую после обьявления нельзя изменить */


/* Попробуем изменить значения */

number = 10; /* Поместили в переменную let число "10" */
console.log(number); /* При помощи console.log() можно отладить код */

leftBorderWidth = 10; /* Поместили в переменную const число "10" */
console.log(leftBorderWidth); /* На этом этапе мы получаем ошибку, потому что константа не может менять своего значения */

/* 
Но есть ещё var, но пользоваться в своих проектах крайне не рекомендуеться 
*/
console.log(name);/* Вот почему не стоит пользоваться var, его видно во всём документе кода, что до, что после её обьявления, это не логичное поведение. Именно по этому рекомендуется использововать let и const  */
var name = "Ivan";

name = "Aleksey"; /* Её значение возможно изменять */




/* Немного о области видимости и переменных let и  const */
{
    let result = 50; /* Внутри фигурных скобок(обычно это бывает функция) обьявляем переменную */
}
console.log(result); /* С помощья console.log мы пытаемся достучаться до переменной result, но он её не видит */

