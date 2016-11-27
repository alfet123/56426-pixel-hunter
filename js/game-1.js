
import {getElementFromTemplate, select} from './lib';
import game2Element from './game-2';
import {common} from './markup';
import {game1} from './data';

export default () => {

  const header = `<header class="header">
    ${common.header.back}
    ${common.header.timer}
    ${common.header.lives}
  </header>`;

  const task = `<p class="game__task">${game1.task}</p>`;

  const content = `<form class="game__content">
      <div class="game__option">
        <img src="${game1.content.option1.image}" alt="${game1.content.option1.alt}" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="${game1.answer.photo.value}">
          <span>${game1.answer.photo.text}</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="${game1.answer.paint.value}">
          <span>${game1.answer.paint.text}</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${game1.content.option2.image}" alt="${game1.content.option2.alt}" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="${game1.answer.photo.value}">
          <span>${game1.answer.photo.text}</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="${game1.answer.paint.value}">
          <span>${game1.answer.paint.text}</span>
        </label>
      </div>
    </form>`;

  const stats = `<div class="stats">
      ${common.stats}
    </div>`;

  const game1Template = `${header}
  <div class="game">
    ${task}
    ${content}
    ${stats}
  </div>`;

  const game1Element = getElementFromTemplate(game1Template);

  const game1Answers = game1Element.querySelectorAll('.game__answer');

  for (let i = 0; i < game1Answers.length; ++i) {
    game1Answers[i].onclick = () => select(game2Element());
  }

  return game1Element;

};
