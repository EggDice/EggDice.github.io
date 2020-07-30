'use strict';

function createAsideWithLineNumbers() {
  const main = document.querySelector('main');
  const aside = document.createElement('aside');
  main.classList.add('has-line-numbers');
  aside.classList.add('line-numbers');
  main.appendChild(aside);
  generateLineNumbers(aside);
}

function generateLineNumbers(aside) {
  const length = 1e3;
  Array.from({ length }, () => document.createElement('div'))
    .forEach(div => aside.appendChild(div));
}

createAsideWithLineNumbers();
