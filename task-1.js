'use strict';//где-то видео услышал, что в ES новых стандартов 
//уже не нужно ставить строгий режим, но желательно
const logItems = function (array) {
  for (var i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
console.log("separating words from numbers");
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
//не понял зачем нам цифры
