import { capitalize } from '../src/capitalize.js';

if (capitalize("Hello") !== "Hello") {
    throw new Error("Функция не работает неверно!")
  }
  
  if (capitalize("") !== "") {
    throw new Error("Функция работает не верно!")
  }
  
  console.log("Все тесты пройдены!")