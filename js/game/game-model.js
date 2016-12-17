
import {initialState} from './game';

class GameModel {
  constructor(gameState = initialState) {
    this.state = gameState;
  }

  get state() {
    return this.state;
  }

/*  hasNextLevel() {
    return hasLevel(this._state.level + 1);
  }

  nextLevel() {
    this._state = setCurrentLevel(this._state, this._state.level + 1);
  }

  die() {
    this._state = setLives(this._state, this._state.lives - 1);
  }

  restart() {
    this._state = initialGame;
  }

  isDead() {
    return this._state.lives <= 0;
  }

  getCurrentLevel() {
    return getLevel(this._state.level);
  }

  tick() {
    this._state = setTime(this._state, this._state.time + 1);
  }*/
}

export default new GameModel();
