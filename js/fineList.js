/*"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){
    /*
     Напишіть свій код тут!
     Як ви бачите функція повертає статичні дані.
     Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
     так, щоб вона повертала масив відповідно переданому значенню в функцію.
     Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
     Тип штрафу може бути тільки
     - Перевищення швидкості
     - Невірне паркування
     - Їзда у не тверезому стані
     


    return [
        {номер: '001', тип: 'Перевищення швидкості', сума: 100, дата: '2023-01-15'}
    ];
}
*/

"use strict";

let DB = window.data.finesData;

let fineList = {
    searchFines: searchFines
};

window.fineList = fineList;

function searchFines(searchKey) {
    let filteredFines = [];

    if (!searchKey) {
        
        console.log("Ви не ввели дані для пошуку.");
        alert("Ви не ввели дані для пошуку.");
        return filteredFines;
    }

    // Визначення, чи введено номер штрафу чи тип штрафу
    let input = searchKey.trim();
    let searchByNumber = !isNaN(input); // true, якщо введено число

    if (searchByNumber) {
        // Пошук за номером
        filteredFines = DB.filter(fine => fine.номер === input);
        console.log("Введений номер штрафа для пошуку:", input);
    } else {
        // Пошук за типом штрафу
        filteredFines = DB.filter(fine => fine.тип.toLowerCase() === input.toLowerCase());
        console.log("Введений тип штрафа для пошуку:", input);
    }

    console.log("Результат пошуку:", filteredFines);
    return filteredFines;
}
