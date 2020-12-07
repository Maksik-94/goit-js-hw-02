// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.
// Если нашли зарещенное слово то функция возвращает true,
// если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.
"use strict";
const checkForSpam = function (message) {
  const stringChecker = message.toLowerCase();

  console.log(stringChecker.includes("sale") || stringChecker.includes("spam"));
};
checkForSpam("Latest technology news"); // false
checkForSpam("JavaScript weekly newsletter"); // false
checkForSpam("Get best sale offers now!"); // true
checkForSpam("[SPAM] How to earn fast money?"); // true
