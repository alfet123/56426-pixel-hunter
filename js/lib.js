
import {markup} from './markup';

const getElementFromTemplate = (templateContent) => {
  let node = document.createElement('span');
  node.innerHTML += templateContent;
  return node.cloneNode(true);
};

const select = (templateElement) => {
  let mainElement = document.getElementById('main');
  mainElement.innerHTML = '';
  mainElement.appendChild(templateElement);
};

const drawLives = (livesLeft, livesTotal = 3) => {
  const livesBlock = document.querySelector('.game__lives');
  livesBlock.innerHTML = '';

  let fullLives = livesLeft;
  let allLives = livesTotal;

  if (fullLives < 0) {
    fullLives = 0;
  }
  if (allLives < 1) {
    allLives = 1;
  }
  if (fullLives > allLives) {
    fullLives = allLives;
  }

  for (let i = allLives; i > 0; i--) {
    if (fullLives < i) {
      livesBlock.innerHTML += markup.header.lives.empty;
    } else {
      livesBlock.innerHTML += markup.header.lives.full;
    }
  }

  return livesBlock;
};

export {getElementFromTemplate};
export {select};
export {drawLives};
