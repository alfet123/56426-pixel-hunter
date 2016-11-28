
import {getElementFromTemplate, select} from './lib';
import statsElement from './stats';
import {common} from './markup';
import {game3} from './data';

export default () => {

  const header = `<header class="header">
    ${common.header.back}
    ${common.header.timer}
    ${common.header.lives}
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
      ${common.stats}
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
