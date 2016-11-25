
import {getElementFromTemplate, select} from './lib';
import game2Element from './game-2';

export default () => {

  const game1 = {
    header: {
      back: 'Back',
      timer: 'NN',
      live: 'Life'
    },
    task: 'Угадайте для каждого изображения фото или рисунок?',
    content: {
      option1: {
        image: 'http://placehold.it/468x458',
        alt: 'Option 1'
      },
      option2: {
        image: 'http://placehold.it/468x458',
        alt: 'Option 2'
      }
    },
    answer: {
      photo: {
        value: 'photo',
        text: 'Фото'
      },
      paint: {
        value: 'paint',
        text: 'Рисунок'
      }
    }
  };

  const header = `<header class="header">
    <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="${game1.header.back}">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
    </div>
    <h1 class="game__timer">${game1.header.timer}</h1>
    <div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" alt="${game1.header.live}" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="${game1.header.live}" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="${game1.header.live}" width="32" height="32">
    </div>
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
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
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
