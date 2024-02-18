/**"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
/**let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;


/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */
//buttonSubmit.addEventListener('click',payFine);
//function payFine(){}


/*"use strict";


let buttonSubmit = document.getElementById("payFine");
let DB = data.finesData;

let passportRegex = /^[А-ЩЬЮЯҐЄІЇ]{2}\d{6}$/;
let creditCardRegex = /^\d{16}$/;
let cvvRegex = /^\d{3}$/;

buttonSubmit.addEventListener('click', payFineOnce);

function payFineOnce() {
    payFine();
    buttonSubmit.removeEventListener('click', payFineOnce);
}

function payFine() {
    let selectedFine = DB.find(fine => fine.номер === fineNumber.value.trim());
    console.log('selectedFine:', selectedFine);

    if (!selectedFine) {
        alert("Штраф з таким номером не знайдено");
        return;
    }

    if (parseFloat(selectedFine.сума) !== parseFloat(amount.value)) {
        alert("Сума не співпадає");
        return;
    }

    if (!passportRegex.test(passport.value)) {
        console.log("Неправильний номер паспорту:", passport.value);
        alert("Не вірний паспортний номер");
        return;
    }

    if (!creditCardRegex.test(creditCardNumber.value)) {
        console.log("Неправильний номер кредитної картки:", creditCardNumber.value);
        alert("Не вірна кредитна картка");
        return;
    }

    if (!cvvRegex.test(cvv.value)) {
        console.log("Неправильний CVV код:", cvv.value);
        alert("Не вірний cvv");
        return;
    }

    DB = DB.filter(fine => fine.номер !== fineNumber.value.trim());
    console.log("DB після видалення:", DB);
    alert("Оплата пройшла успішно");
    
}
*/

"use strict";

let DB = window.data.finesData;

let passportRE = /^[А-ЩЬЮЯҐЄІЇ]{2}\d{6}$/;
let creditCardRE = /^\d{16}$/;
let cvvRE = /^\d{3}$/;

let buttonSubmit = document.getElementById("payFine");

buttonSubmit.addEventListener('click', payFineOnce);

function payFineOnce() {
    payFine();
    buttonSubmit.removeEventListener('click', payFineOnce);
}

function payFine() {
    let selectedFine = DB.find(fine => fine.номер === fineNumber.value.trim());
    console.log('selectedFine:', selectedFine);

    if (!selectedFine) {
        alert("Штраф з таким номером не знайдено");
        return;
    }

    if (parseFloat(selectedFine.сума) !== parseFloat(amount.value)) {
        alert("Сума не співпадає");
        return;
    }

    if (!passportRE.test(passport.value)) {
        console.log("Неправильний номер паспорту:", passport.value);
        alert("Не вірний паспортний номер");
        return;
    }

    if (!creditCardRE.test(creditCardNumber.value)) {
        console.log("Неправильний номер кредитної картки:", creditCardNumber.value);
        alert("Не вірна кредитна картка");
        return;
    }

    if (!cvvRE.test(cvv.value)) {
        console.log("Неправильний CVV код:", cvv.value);
        alert("Не вірний cvv");
        return;
    }

    // Видалення штрафу з бази даних
    let fineIndex = DB.findIndex(fine => fine.номер === selectedFine.номер);
    if (fineIndex !== -1) {
        DB.splice(fineIndex, 1); // Видалення штрафу з масиву
        console.log("DB після видалення:", DB);
    } else {
        console.log("Помилка: Штраф не знайдено в базі даних");
    }

    alert("Оплата пройшла успішно");
}
