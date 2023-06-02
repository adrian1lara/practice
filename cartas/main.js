const selectBlackCard = document.querySelector('.cuadro1 button');
const selectRedCard = document.querySelector('.cuadro2 button');
const resultDiv = document.querySelector('.result');
let score = 0;
let selectedCard = null;

function getRandomCard() {
    const cards = ['red', 'black'];

    return cards[Math.floor(Math.random() * cards.length)];
}

function displayResult() {

    if (selectedCard === null) {
        resultDiv.innerHTML = '<p>Selecciona una carta</p>';
    } else {
        const randomCard = getRandomCard();
        console.log(randomCard);
        if (selectedCard === randomCard) {
            score++;
            resultDiv.innerHTML = `<div class="${randomCard}-card"></div><p>You won! The winner card was ${selectedCard}</p>
           <h1>score: ${score}</h1>`;
        } else {
            score = 0
            resultDiv.innerHTML = `<div class="${randomCard}-card"></div><p>You lost! The winner card was ${selectedCard}</p>
            <h1>score: ${score}</h1>`;
        }
    }
}

selectBlackCard.addEventListener('click', () => {
    selectedCard = 'black';
    displayResult();
    
});

selectRedCard.addEventListener('click', () => {
    selectedCard = 'red';
    displayResult();
})