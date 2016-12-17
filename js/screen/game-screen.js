
import gameModel from '../game/game-model';
// import gameView from '../game/game-view';
import HeaderView from '../game/header-view';
// import gameData from '../data/data';
// import LevelView from '../game/level-view';
import Application from '../application';

class GamePresenter {

  constructor() {
    this.headerElement = new HeaderView(gameModel.state).element;
    this.headerElement.querySelector('.header__back').onclick = (evt) => Application.showGreeting();
//    this.content = new LevelView(gameModel.getCurrentLevel());

    this.root = document.createElement('div');
    this.root.appendChild(this.headerElement);
//    this.root.appendChild(this.content.element);
  }

}

const game = new GamePresenter();

export default () => {
//  game.levelInit(0);
  return game.root;
};
