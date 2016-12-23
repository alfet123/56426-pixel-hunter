
import {initialState} from '../data/data';

export default class GameModel {

  constructor(gameData) {
    this.data = gameData;
    this._state = Object.assign({}, initialState);
    for (let i = 0; i < this.data.length; i++) {
      this._state.levels.push('unknown');
    }
  }

  getState() {
    return this._state;
  }

  getData() {
    return this.data[this._state.level];
  }

  getTimer() {
    return this._state.timer.value;
  }

  getLevel() {
    return this._state.level;
  }

  initTimer() {
    this._state.timer.value = this._state.timer.init;
  }

  tick() {
    this._state.timer.value--;
  }

  correct() {
    this._state.answers.correct++;
    this._state.levels[this._state.level] = 'correct';
  }

  fast() {
    this._state.answers.fast++;
    this._state.levels[this._state.level] = 'fast';
  }

  slow() {
    this._state.answers.slow++;
    this._state.levels[this._state.level] = 'slow';
  }

  wrong() {
    this._state.lives.left--;
    this._state.levels[this._state.level] = 'wrong';
  }

  hasLives() {
    return this._state.lives.left > 0;
  }

  nextLevel() {
    this._state.level++;
  }

  hasLevel() {
    return this._state.level < this.data.length;
  }

}
