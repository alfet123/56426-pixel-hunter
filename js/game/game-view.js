
import AbstractView from '../view';
// import Application from '../application';
// import HeaderView from './header-view';

class GameView extends AbstractView {

  constructor() {
    super();
//    this.header = new HeaderView(gameState);
  }

  getMarkup() {
//    return `${this.header.getMarkup(true)}
//      <div class="game"></div>`;
    return '<div class="game"></div>';
  }

  bindHandlers() {
//    this.element.querySelector('.header__back').onclick = (evt) => Application.showGreeting();
  }

}

export default () => new GameView().element;
