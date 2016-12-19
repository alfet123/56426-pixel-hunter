
import {initialState} from './game';
import {gameData} from '../data/data';

class GameModel {

  constructor() {
    this.state = Object.assign({}, initialState);
  }

  getState() {
    return this.state;
  }

  getData() {
    return gameData[this.state.level];
  }

  initTimer() {
    this.state.timer.value = this.state.timer.init;
  }

  tick() {
    this.state.timer.value--;
  }

  getTimer() {
    return this.state.timer.value;
  }

  correct() {
    this.state.answers.correct++;
    this.state.levels[this.state.level] = 'correct';
  }

  fast() {
    this.state.answers.fast++;
    this.state.levels[this.state.level] = 'fast';
  }

  slow() {
    this.state.answers.slow++;
    this.state.levels[this.state.level] = 'slow';
  }

  wrong() {
    this.state.lives.left--;
    this.state.levels[this.state.level] = 'wrong';
  }

  hasLives() {
    return this.state.lives.left > 0;
  }

  nextLevel() {
    this.state.level++;
  }

  getLevel() {
    return this.state.level;
  }

  hasLevel() {
    return this.state.level < gameData.length;
  }

}

export default new GameModel();
