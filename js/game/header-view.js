
import AbstractView from '../view';

export default class HeaderView extends AbstractView {

  constructor(gameState = null) {
    super();
    if (gameState) {
      this.state = Object.assign({}, gameState);
    }
  }

  drawLives() {
    this.livesBlock = '<div class="game__lives">';
    for (let i = this.state.lives.total; i > 0; i--) {
      this.livesBlock += `<img src="img/heart__${(this.state.lives.left < i) ? 'empty' : 'full'}.svg" class="game__heart" alt="Life" width="32" height="32">`;
    }
    this.livesBlock += '</div>';
    return this.livesBlock;
  }

  getMarkup(game = false) {
    return `
      <header class="header">
        <div class="header__back">
          <span class="back">
            <img class="back-btn" src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>
        </div>
      ${(game) ? `<h1 class="game__timer">${this.state.timer}</h1>
        ${this.drawLives()}` : ''}
      </header>`;
  }

  bindHandlers() {
    return super.bindHandlers();
  }

}
