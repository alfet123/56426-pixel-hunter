
import {getElementFromTemplate, select} from './lib';
import game3Element from './game-3';
import {game2} from './data';

export default () => {

  const header = `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="${game2.header.back}">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${game2.header.timer}</h1>
    <div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" alt="${game2.header.live}" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="${game2.header.live}" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="${game2.header.live}" width="32" height="32">
    </div>
  </header>`;

  const task = `<p class="game__task">${game2.task}</p>`;

  const content = `<form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${game2.content.option1.image}" alt="${game2.content.option1.alt}" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="${game2.answer.photo.value}">
          <span>${game2.answer.photo.text}</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="${game2.answer.paint.value}">
          <span>${game2.answer.paint.text}</span>
        </label>
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

  const game2Template = `${header}
  <div class="game">
    ${task}
    ${content}
    ${stats}
  </div>`;

  const game2Element = getElementFromTemplate(game2Template);

  const game2Answers = game2Element.querySelectorAll('.game__answer');

  for (let i = 0; i < game2Answers.length; ++i) {
    game2Answers[i].onclick = () => select(game3Element());
  }

  return game2Element;

};
