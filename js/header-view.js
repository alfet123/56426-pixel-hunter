
import AbstractView from './view';

export default class HeaderView extends AbstractView {

  constructor() {
    super();
  }

  getMarkup(game = false) {
    return `
      <header class="header">
        <div class="header__back">
          <span class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>
        </div>
      ${(game) ? `<h1 class="game__timer">NN</h1>
        <div class="game__lives"></div>` : ''}
      </header>`;
  }

}
