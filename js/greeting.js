
import {getElementFromTemplate, select} from './lib';
import rulesElement from './rules';
import {greeting} from './data';

export default () => {

  const greetingTemplate = `<div class="greeting  central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="${greeting.logo}"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${greeting.title}</h3>
      <p>${greeting.text}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="${greeting.continue}"></span></div>
  </div>`;

  const greetingElement = getElementFromTemplate(greetingTemplate);

  greetingElement.querySelector('.greeting__continue').onclick = () => select(rulesElement());

  return greetingElement;

};
