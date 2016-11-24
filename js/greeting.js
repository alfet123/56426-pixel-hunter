
import {getElementFromTemplate, select} from './lib';
import {rulesElement} from './rules';

const greeting = {
  logo: 'Pixel Hunter',
  title: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
  text: 'Правила игры просты.<br>Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>Задача кажется тривиальной, но не думай, что все так просто.<br>Фотореализм обманчив и коварен.<br>Помни, главное — смотреть очень внимательно.',
  continue: 'Next'
};

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

greetingElement.querySelector('.greeting__continue').onclick = () => select(rulesElement);

export {greetingElement};
