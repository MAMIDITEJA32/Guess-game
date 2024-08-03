document.addEventListener('DOMContentLoaded', (event) => {
    const guessButton = document.getElementById('guessButton');
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    
    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value, 10);
        
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Please enter a number between 1 and 100.';
            message.style.color = 'red';
        } else if (userGuess > targetNumber) {
            message.textContent = 'Too high! Try again.';
            message.style.color = 'orange';
        } else if (userGuess < targetNumber) {
            message.textContent = 'Too low! Try again.';
            message.style.color = 'orange';
        } else {
            message.textContent = 'Congratulations! You guessed the number!';
            message.style.color = 'green';
        }
    });
});
