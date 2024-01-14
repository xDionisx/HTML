
function guessNum(num) {
    while(true) {
        const secretNumber = Math.ceil(Math.random() * 10);
        if (num === secretNumber) {
            alert('Вы угадали!'); 
            return secretNumber;}
            else alert('Секретное число:', secretNumber, 'Попробуйте еще!') 
            return secretNumber;
        }
    };