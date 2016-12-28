
import AbstractView from '../view';
import Application from '../application';
import HeaderView from '../game/header-view';
import {param} from '../data/data';

class RulesView extends AbstractView {

  constructor() {
    super();
    this.userName = null;
    this.url = '';
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
    const back = this.element.querySelector('.back-btn');
    const input = this.element.querySelector('.rules__input');
    const submit = this.element.querySelector('.rules__button');

    back.onclick = () => {
      Application.showGreeting();
    };

    input.oninput = (evt) => {
      this.userName = evt.target.value;
      if (evt.target.value) {
        submit.removeAttribute('disabled');
      } else {
        submit.setAttribute('disabled', '');
      }
    };

    submit.onclick = (evt) => {
      evt.preventDefault();
      param.user = this.userName;
      this.url = param.baseUrl + param.user;
      this.loadStats();
      Application.showGame();
    };
  }

  loadStats() {
    window.fetch(this.url).
        then(status).
        then((response) => response.json()).
        then((data) => {
          window.console.log('Get request succeeded with JSON response', data);
          param.userStats = data.slice(0);
          window.console.log('Get request succeeded with JSON response', param.userStats);
        }).
        catch((error) => {
          window.console.log('Get request failed', error);
        });
  }

}

export default () => new RulesView().element;
