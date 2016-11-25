
import {getElementFromTemplate, select} from './lib';
import statsElement from './stats';

export default () => {

  const game3 = {
    header: {
      back: 'Back',
      timer: 'NN',
      live: 'Life'
    },
    task: 'Найдите рисунок среди изображений',
    content: {
      option1: {
        image: 'http://placehold.it/304x455',
        alt: 'Option 1'
      },
      option2: {
        image: 'http://placehold.it/304x455',
        alt: 'Option 2'
      },
      option3: {
        image: 'http://placehold.it/304x455',
        alt: 'Option 3'
      }
    }
  };

  const header = `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="${game3.header.back}">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${game3.header.timer}</h1>
    <div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" alt="${game3.header.live}" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="${game3.header.live}" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="${game3.header.live}" width="32" height="32">
    </div>
  </header>`;

  const task = `<p class="game__task">${game3.task}</p>`;

  const content = `<form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${game3.content.option1.image}" alt="${game3.content.option1.alt}" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${game3.content.option2.image}" alt="${game3.content.option2.alt}" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${game3.content.option3.image}" alt="${game3.content.option3.alt}" width="304" height="455">
      </div>
    </form>`;

  const stats = `<div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>`;

  const game3Template = `${header}
  <div class="game">
    ${task}
    ${content}
    ${stats}
  </div>`;

  const game3Element = getElementFromTemplate(game3Template);

  const game3Answers = game3Element.querySelectorAll('.game__option');

  for (let i = 0; i < game3Answers.length; ++i) {
    game3Answers[i].onclick = () => select(statsElement());
  }

  return game3Element;

};
