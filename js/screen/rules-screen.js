
import AbstractView from '../view';
import Application from '../application';
import HeaderView from '../game/header-view';

class RulesView extends AbstractView {

  constructor() {
    super();
    this.header = new HeaderView();
  }

  getMarkup() {
    return `${this.header.getMarkup()}
      <div class="rules  central--none">
        <h1 class="rules__title">Правила</h1>
        <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
          src="img/photo_icon.png" width="16" height="16"> или рисунок <img
          src="img/paint_icon.png" width="16" height="16">.<br>Фотографиями или рисунками могут быть оба изображения.<br>На каждую попытку отводится 30 секунд.<br>Ошибиться можно не более 3 раз.<br><br>Готовы?
        </p>
        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="Ваше Имя">
          <button class="rules__button  continue" type="submit" disabled>Go!</button>
        </form>
      </div>`;
  }

  bindHandlers() {
    const input = this.element.querySelector('.rules__input');
    const submit = this.element.querySelector('.rules__button');

    input.oninput = (evt) => {
      if (evt.target.value) {
        submit.removeAttribute('disabled');
      } else {
        submit.setAttribute('disabled', '');
      }
    };

    submit.onclick = (evt) => {
      evt.preventDefault();
//      select(this.game.element);
//      this.game.element.onshow();
      Application.showGame();
    };
  }

}

export default () => new RulesView().element;
