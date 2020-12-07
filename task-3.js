// Напиши фукцнию findLongestWord(string),
// которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.
// split(s) — позволяет превратить строку в массив, разбив ее по разделителю s.
"use strict";
const findLongestWord = function (string) {
  const arrWords = string.split(" ");
  let word = arrWords[0];
  for (let i = 0; i < arrWords.length; i += 1) {
    if (arrWords[i].length > word.length) {
      //думаю, что здесь ошибка
      word = arrWords[i];
    }
  }
  return word;
  console.log(findLongestWord);
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
