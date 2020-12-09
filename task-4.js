// Напиши функцию formatString(string) которая принимает строку
// и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов 
// и добавляет в конец строки троеточие '...', 
// после чего возвращает укороченную версию.
'use strict';
const formatString = function (string) {
  // if (string.length <= 40) {
  //   return string;
  // } else {
  //   const changeString = string.slice(0, 40);
  //   return `${changeString}...`;
  // }

const changeString = 40 <= string.length ? string.slice(0, 40) + '...' : string;
  return changeString; //со стрелочными синтаксис не могу запомнить, что за чем идёт
}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);

