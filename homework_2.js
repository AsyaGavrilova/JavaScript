// 1. Преобразовать написанный код в функцию, принимающую на вход возраст.
//Вывести в консоль результат работы функции с возрастами 17, 18, 61.

let age_2 = 18;
let age_3 = 60;

const checkAge = (age_1) => {
    if (age_1 < age_2) {
    console.log("You don’t have access cause your age is " + age_1 + " It’s less then ")
}   else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome  !")
}   else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel")
}   else {
    console.log("Technical work")
}
}

checkAge(17);
checkAge(18);
checkAge(61);



//2. Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - появлялась ошибка.
 
let age_2 = 18;
let age_3 = 60;

const checkAge = (age_1) => {
    if (typeof age_1 == "number") {
        if (age_1 < age_2) {
            console.log("You don’t have access cause your age is " + age_1 + " It’s less then ")
        } else if (age_1 >= age_2 && age_1 < age_3) {
            console.log("Welcome  !")
        } else if (age_1 > age_3) {
            console.log("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
    } else {
        console.log("ERROR!")
    }
}

checkAge('десять');


//3* Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number.

let age_2 = 18;
let age_3 = 60;

const checkAge = (age_1) => {
    if (age_1 && !isNaN(age_1)) {
        if (age_1 < age_2) {
            console.log("You don’t have access cause your age is " + age_1 + " It’s less then ")
        } else if (age_1 >= age_2 && age_1 < age_3) {
            console.log("Welcome  !")
        } else if (age_1 > age_3) {
            console.log("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
    } else {
        console.log("ERROR!")
    }
}

checkAge('2');
checkAge('five5');
checkAge(28);
checkAge('0');
checkAge('');
