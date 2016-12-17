
import AbstractView from '../view';

export default class HeaderView extends AbstractView {

  constructor(gameState = null) {
    super();
    this.state = gameState;
  }

/*  update(newState) {
    this.state = newState;
    this.element.innerHTML = this.getMarkup();
  }*/

  _drawLives() {
    let livesBlock = '<div class="game__lives">';
    for (let i = this.state.lives.total; i > 0; i--) {
      livesBlock += `<img src="img/heart__${(this.state.lives.left < i) ? 'empty' : 'full'}.svg" class="game__heart" alt="Life" width="32" height="32">`;
    }
    livesBlock += '</div>';
    return livesBlock;
  }

//  getMarkup(game = false) {
  getMarkup() {
    return `
      <header class="header">
        <div class="header__back">
          <span class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>
        </div>
      ${(this.state) ? `<h1 class="game__timer">NN</h1>
        ${this._drawLives()}` : ''}
      </header>`;
  }

  bindHandlers() {
    return super.bindHandlers();
  }

}
