
function guessNum(num) {

        const secretNumber = Math.ceil(Math.random() * 10);
        if (num === secretNumber) {
            alert('Вы угадали!'); 
            return secretNumber;}
            alert('Не верно. Попробуйте еще!') 
            return secretNumber;

    };