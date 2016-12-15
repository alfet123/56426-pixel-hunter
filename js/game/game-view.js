
import AbstractView from './view';
import HeaderView from './header-view';
import runGame from './game';

export default class GameView extends AbstractView {

  constructor() {
    super();
    this.header = new HeaderView();
  }

  getMarkup() {
    return `${this.header.getMarkup(true)}
      <div class="game"></div>`;
  }

  bindHandlers() {
    this.element.onshow = () => runGame();
  }

}
