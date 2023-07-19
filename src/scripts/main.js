'use strict';

const buttonStart = document.querySelector('.button.start');

const messageStart = document.querySelector('.message-start');

const cells = Array.from(document.querySelectorAll('.field-cell'));

function startGame() {
  buttonStart.textContent = 'Restart';
  buttonStart.classList.remove('start');
  buttonStart.classList.add('restart');

  messageStart.classList.add('hidden');

  clearField();
  cellAppear();
  cellAppear();
}

function clearField() {
  cells.forEach(cell => {
    cell.className = 'field-cell';
    cell.textContent = '';
  });
}

function cellAppear() {
  const emptyCells = cells.filter(cell => cell.classList.length === 1);

  const index = getRandomIntInclusive(0, emptyCells.length - 1);

  emptyCells[index].classList.add('field-cell--2');
  emptyCells[index].textContent = '2';
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

buttonStart.onclick = () => {
  startGame();
};
