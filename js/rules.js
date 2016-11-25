
import {getElementFromTemplate, select} from './lib';
import game1Element from './game-1';

export default () => {

  const rules = {
    back: 'Back',
    title: 'Правила',
    description: {
      text1: 'Угадай 10 раз для каждого изображения фото',
      text2: 'или рисунок',
      text3: '.<br>Фотографиями или рисунками могут быть оба изображения.<br>На каждую попытку отводится 30 секунд.<br>Ошибиться можно не более 3 раз.<br><br>Готовы?'
    },
    form: {
      input: 'Ваше Имя',
      button: 'Go!'
    }
  };

  const header = `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="${rules.back}">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>`;

  const content = `<div class="rules  central--none">
    <h1 class="rules__title">${rules.title}</h1>
    <p class="rules__description">${rules.description.text1} <img
      src="img/photo_icon.png" width="16" height="16"> ${rules.description.text2} <img
      src="img/paint_icon.png" width="16" height="16" alt="">${rules.description.text3}
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="${rules.form.input}">
      <button class="rules__button  continue" type="submit" disabled>${rules.form.button}</button>
    </form>
  </div>`;

  const rulesTemplate = `${header}
  ${content}`;

  const rulesElement = getElementFromTemplate(rulesTemplate);

  const rulesSubmit = rulesElement.querySelector('.rules__button');

  rulesElement.querySelector('.rules__input').oninput = (e) => {
    if (e.target.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  rulesSubmit.onclick = (e) => {
    e.preventDefault();
    select(game1Element());
  };

  return rulesElement;

};
