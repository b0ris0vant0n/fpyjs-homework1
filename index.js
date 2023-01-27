let n = Math.floor(Math.random() * 1000);
console.log('Я загадал', n)

while(true) {
let numberFromUser = prompt('Введите число от 0 до 999');
console.log('Вы ввели', numberFromUser)

if (numberFromUser == 'q') {
    break
}
if (isNaN(numberFromUser) || (+numberFromUser < 0 && +numberFromUser > 999)) {
    alert('Вы ввели не число от 0 до 999')
} else if (+numberFromUser > n) {
    alert('Меньше')
} else if (+numberFromUser < n) {
    alert('Больше')
} else {
    alert('Вы угадали!')
}
}