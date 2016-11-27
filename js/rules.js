
import {getElementFromTemplate, select} from './lib';
import game1Element from './game-1';
import {common} from './markup';
import {rules} from './data';

export default () => {

  const header = `<header class="header">
    ${common.header.back}
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
