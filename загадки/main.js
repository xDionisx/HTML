var triesPointer=0;
const riddle = {
    question: 'Висит груша, нельзя скушать',
    corretAnswer: 'лампочка',
    tries : 3,
    hints: ['Это не съедобно. ', 'Это бывает в доме. ', 'Поразмышляйте перед сном и приходите завтра!:)'],
    checkAnswer(answer) { 
        console.log('answer: ', answer);
        while (this.tries>0) {
            if
            (answer.toLowerCase() === this.corretAnswer) {
                alert('Поздравляем!Вы ответили правильно!');
                return 0;
            }
            else{
                this.tries--;
                alert('К сожалению это не правильный ответ, но вот Вам подсказка: ' + this.hints[triesPointer] + ' Осталось попыток: '+ this.tries)
                return triesPointer++;
                
            } 
        }
        }
        }
        
window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}
  function check(){
    const input = document.getElementsByTagName('input')[0];
    const guessedAnswer = input.value;
    if (guessedAnswer.length>1){
    riddle.checkAnswer(guessedAnswer);
    }
    else {alert('Некорректные данные!')}
  }