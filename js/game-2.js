
import {getElementFromTemplate, select} from './lib';
import game3Element from './game-3';
import {common} from './markup';
import {game2} from './data';

export default () => {

  const header = `<header class="header">
    ${common.header.back}
    ${common.header.timer}
    ${common.header.lives}
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
      ${common.stats}
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
