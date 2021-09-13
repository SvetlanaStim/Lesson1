'use strict';

/*let userName = prompt('Как вас зовут?');


// alert('Привет, ' + userName); 
alert(`Привет, ${userName}`); 


userName = 555;
alert(`Привет, ${userName}`);*/

/*
1. Запросите у пользователя число, возведите это число во
2-ю степень и выведите на экран.
*/
/*
// Задание 1
let a = prompt('Введите число', '5');
let b;
b = a ** 2; 
// alert(`Квадрат числа ${a} равен ${b}`);
alert('Квадрат числа '+ a + ' равен '+ b);*/

/*
2. Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.
*/

/*// Задание 2
let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
let c = (a+b)/2;
alert('Среднее арифметическое равно ' + c);*/


/*
3. Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.
*/

/*let a = +prompt('Введите длину стороны квадрата');
let s = a**2;
alert('Площадь квадрата со стороной ' + a + ' равна ' + s);*/

/*4. Реализуйте конвертор из километров в мили (пользователь
вводит километры, программа выводит мили). 1 км = 0,621371
миль. Это значение укажите в коде как константу.
*/
/*// Задание 4
const METER_TO_MILES = 0.621371;
let meters = +prompt('Введите количество метров');
let miles = meters * METER_TO_MILES;
alert('В милях это ' + miles);*/

/*
5. Реализуйте калькулятор. Пользователь вводит два числа,
а программа выводит результаты действий + - * / между
этими числами.
*/
/*let firstNumber = +prompt('Введите первое число');
let secondNumber = +prompt('Введите второе число');
document.write(`<p>${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}</p>`);
document.write(`<p>${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}</p>`);
document.write(`<p>${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}</p>`);
document.write(`<p>${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}</p>`);*/

/*
6. Пользователь вводит значения a и b для формулы a * x + b = 0,
а программа считает и выводит значение x.
*/
/*let ratioA = +prompt('Введите значение a для уравнения a * x + b = 0');
let ratioB = +prompt('Введите значение b для уравнения a * x + b = 0');
alert('х равен ' + (-ratioB/ratioA));*/

/*
7. Запросите у пользователя текущее время (часы и минуты)
и выведите, сколько часов и минут осталось до следующего
дня.
*/
/*let hours, minutes, remainderHours, remainderMinutes;
hours = +prompt('Сколько сейчас часов?');
minutes = +prompt('Сколько сейчас минут?');
if (minutes > 0) {
    remainderHours = 23 - hours;
    remainderMinutes = 60 - minutes;
    alert ('До конца суток осталось ' + remainderHours + ' ч. и ' + remainderMinutes + ' мин.');
} else {
    remainderHours = 24 - hours;
    alert ('До конца суток осталось ' + remainderHours + ' ч.');**
}*/

/*
8. Запросите у пользователя трехзначное число и выведите
вторую цифру этого числа. Для решения задачи используйте
оператор % (остаток от деления).
*/


/*// Задание 8
let num, secondSymbol;

num = +prompt('Введите трёхзначное число');
secondSymbol = num % 100;
secondSymbol = (secondSymbol - (secondSymbol % 10))/10;
alert(secondSymbol);*/


/*
9. Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно
получиться число 51234).
*/
/*let userNumber, lastSymbol, newNumber;

userNumber = +prompt('Введите пятизначное число');
lastSymbol = userNumber % 10;
newNumber = lastSymbol * 10000 + Math.floor(userNumber / 10);
alert(newNumber);*/

/*
10. Зарплата работника составляет $250 + 10% от продаж.
Запросите общую сумму продаж за месяц и посчитайте
зарплату. 
*/
/*let salesAmount = +prompt('Введите общую сумму продаж за месяц');
let salary = 250 + salesAmount * 0.1;
alert('Ваша зарплата за этот месяц составила ' + salary + ' $');*/

//Условия. Задания, в которых необходимо использовать IF.
/*1. Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.*/

/*let userNumber;
userNumber = +prompt('Введите число');
if (userNumber < 0) {
    alert('Число отрицательное');
} else if (userNumber === 0) {
    alert('Число равно нулю');
} else alert('Число положительное');*/

/* 2. Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).*/

/*// Задание 2
let userAge = +prompt('Сколько вам лет?');
if (userAge < 0 || userAge > 120) {
    alert('Вы врёте!');
}*/

/*
3. Запросить у пользователя число и вывести его модуль
(|7| = 7, |-7| = 7).
 */
/*//Задание 3
let userNamber, modul;

userNamber = +prompt('Введите число');
if (userNamber < 0)     
    modul = -userNamber;
else modul = userNamber;
alert('Модуль равен ' + modul);*/

/*4. Запросить у пользователя время (часы, минуты, секунды)
и проверить корректность введенных данных.
*/
/*let  hours, minutes, seconds;
hours = +prompt('Сколько сейчас часов?');
minutes = +prompt('Сколько сейчас минут?');
seconds = +prompt('Сколько сейчас секунд?');
if (hours < 0 || hours >23) {    
    alert ('Вы ввели некорректное количество часов');
} 
if (minutes < 0 || minutes >59) {    
    alert ('Вы ввели некорректное количество минут');
} 
if (seconds < 0 || seconds >59) {
    alert ('Вы ввели некорректное количество секунд');
}*/

/*5. Запросить координаты точки (x, y) и определить номер
четверти, в которую попала эта точка. Необходимо учесть
случаи попадания точки на оси X или Y или в начало
координат.*/
let coordX, coordY;
coordX = +prompt('Введите значение первой координаты точки');
coordY = +prompt('Введите значение второй координаты точки');
if (coordX === 0 && coordY === 0) alert(`Точка (${coordX}, ${coordY}) находится в начале координат`)
else if (coordX === 0) alert(`Точка (${coordX}, ${coordY}) находится на оси Y`)
else if (coordY === 0) alert(`Точка (${coordX}, ${coordY}) находится на оси X`)
else if (coordX > 0 && coordY > 0) alert(`Точка (${coordX}, ${coordY}) находится в I четверти`)
else if (coordX < 0 && coordY > 0) alert(`Точка (${coordX}, ${coordY}) находится во II четверти`)
else if (coordX < 0 && coordY < 0) alert(`Точка (${coordX}, ${coordY}) находится в III четверти`)
else alert(`Точка (${coordX}, ${coordY}) находится в IV четверти`)