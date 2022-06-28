//1. Написать скрипт, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1.

// 1 способ:
for (i = 1; i <= 10; i++) {
    console.log(2 ** i)
}

// 2 способ:
for (i = 1; i <= 10; i++) {
    console.log(Math.pow(2, i))
}


//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2.

const exponentiate = (deg) => {
    for (i = 1; i <= deg; i++) {
    console.log(2 ** i)
    }
}

exponentiate(5);



//2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее.

let x = ':)'
for (i = 0; i <= 5; i++) {
    console.log(x)
    x = x + ':)'
}



//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода.

const printSmile = (str, num) => {
    let x = str
    for (i = 0; i <= num; i++) {
        console.log(x)
        x = x + str
    }
}

printSmile('*', 7);



//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.

const getWordStructure = (word) => {
    let vowelsCount = 0;
    let consonantsCount = 0;

    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']

    for (let char of word.toLowerCase()) {
        if(vowels.includes(char)) {
        vowelsCount += 1
        } else if (consonants.includes(char)) {
        consonantsCount += 1
        }
    }
    console.log(`Слово ${word} состоит из ${vowelsCount} гласных букв и ${consonantsCount} согласных букв`)
    }

getWordStructure('case');
getWordStructure('Case');
getWordStructure('Check-list');



//4**. Написать функцию, которая проверяет, является ли слово палиндромом
const isPalindrom = (word) => {
    // massive = word.split('')
    if (word.toLowerCase() === word.toLowerCase().split('').reverse().join('')) {
        console.log('Слово является палиндромом')
    } else if (word !== word.split('').reverse().join('')) {
        console.log('Слово не палиндром')
    }
}

isPalindrom('abba');
isPalindrom('Abba');
isPalindrom('Beyonce');
