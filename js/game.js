
import {getElementFromTemplate, drawLives} from './lib';
import {markup} from './markup';
import {gameData, gameState} from './data';

export default () => {

  const header = `<header class="header">
      ${markup.header.back}
      ${markup.header.timer}
    </header>`;

  const gameTemplate = `${header}
    <div class="game">
    </div>`;

  const gameElement = getElementFromTemplate(gameTemplate);

  const gameOnShow = () => {

    let game = gameData[0];

    const gameHeader = document.querySelector('.header');
    gameHeader.appendChild(drawLives(gameState.lives.left, gameState.lives.total));

    const task = `<p class="game__task">${game.task}</p>`;
    const content = `<form class="game__content">
        <div class="game__option">
          <img src="${game.content.option1.image}" alt="${game.content.option1.alt}" width="468" height="458">
          <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src="${game.content.option2.image}" alt="${game.content.option2.alt}" width="468" height="458">
          <label class="game__answer  game__answer--photo">
            <input name="question2" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input name="question2" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>`;
    const stats = `<div class="stats">
        ${markup.stats}
      </div>`;

    let gameCurrentLevel = `${task}
      ${content}
      ${stats}`;

    const gameContentElement = document.querySelector('.game');
    gameContentElement.innerHTML = gameCurrentLevel;

  }; // gameOnShow

  gameElement.onshow = gameOnShow;

  return gameElement;

};
