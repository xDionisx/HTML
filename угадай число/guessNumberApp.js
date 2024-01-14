
function guessNum(num) {
    while(true) {
        const secretNumber = Math.ceil(Math.random() * 10);
        if (num === secretNumber) {
            console.log('Вы угадали!'); return secretNumber;}
            else console.log('Секретное число:', secretNumber, 'Попробуйте еще!') 
            return secretNumber;
        }
    };