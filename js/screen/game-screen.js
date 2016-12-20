
import gameModel from '../game/game-model';
import GameView from '../game/game-view';
import HeaderView from '../game/header-view';
import Application from '../application';
import {QuestionType} from '../game/game';

class GamePresenter {

  constructor() {
    this.element = document.createElement('span');
    this.timerId = null;
    this.timerElement = null;
    this.gameInputs = null;
    this.counter = null;
    this.answers = {
      option1: false,
      option2: false,
      value1: false,
      value2: false
    };
  }

  levelInit() {
    const header = new HeaderView(gameModel.getState());
    const content = new GameView(gameModel.getState(), gameModel.getData());
    this.element.innerHTML = `${header.getMarkup(true)}
      <div class="game">${content.getMarkup()}</div>`;
    this.timerElement = this.element.querySelector('.game__timer');
    this.bindHandlers();
    this.runTimer();
  }

  bindHandlers() {
    this.element.querySelector('.back-btn').onclick = () => Application.showGreeting();
    switch (gameModel.getData().type) {
      case QuestionType.TINDER_LIKE:
        this.gameInputs = this.element.querySelectorAll('input');
        for (let i = 0; i < this.gameInputs.length; ++i) {
          this.gameInputs[i].onclick = this._onAnswer1.bind(this);
        }
        break;
      case QuestionType.TWO_OF_TWO:
        this.gameInputs = this.element.querySelectorAll('input');
        for (let j = 0; j < this.gameInputs.length; ++j) {
          this.gameInputs[j].onclick = this._onAnswer2.bind(this);
        }
        break;
      case QuestionType.ONE_OF_THREE:
        this.gameInputs = this.element.querySelectorAll('.game__option');
        for (let k = 0; k < this.gameInputs.length; ++k) {
          this.gameInputs[k].onclick = this._onAnswer3.bind(this);
        }
        break;
    }
  }

  runTimer() {
    gameModel.initTimer();
    this.timerElement.innerHTML = gameModel.getTimer();
    this.timerId = setInterval(this._gameTimer.bind(this), 1000);
  }

  checkAnswers(gameType) {
    if (gameType === QuestionType.TWO_OF_TWO) {
      if (this.answers.option1 && this.answers.option2) {
        clearInterval(this.timerId);
        this.answers.option1 = false;
        this.answers.option2 = false;
        if (this.answers.value1 && this.answers.value2) {
          this.answerCorrect();
        } else {
          this.answers.value1 = false;
          this.answers.value2 = false;
          gameModel.wrong();
        }
        this.nextLevel();
      }
    } else {
      clearInterval(this.timerId);
      if (this.answers.value1) {
        this.answerCorrect();
      } else {
        gameModel.wrong();
      }
      this.nextLevel();
    }
  }

  answerCorrect() {
    this.answers.value1 = false;
    this.answers.value2 = false;
    gameModel.correct();
    if (gameModel.getTimer() > 20) {
      gameModel.fast();
    }
    if (gameModel.getTimer() < 10) {
      gameModel.slow();
    }
  }

  nextLevel() {
    gameModel.nextLevel();
    if (gameModel.hasLevel() && gameModel.hasLives()) {
      this.levelInit();
    } else {
      Application.showStats(gameModel.getState());
    }
  }

  _gameTimer() {
    if (gameModel.getTimer() > 0) {
      gameModel.tick();
      this.timerElement.innerHTML = gameModel.getTimer();
    } else {
      clearInterval(this.timerId);
      gameModel.wrong();
      this.nextLevel();
    }
  }

  _onAnswer1(evt) {
    if (evt.target.value === gameModel.getData().answers[0].type) {
      this.answers.value1 = true;
    }
    this.checkAnswers(QuestionType.TINDER_LIKE);
  }

  _onAnswer2(evt) {
    if (evt.target.name === 'question1') {
      this.answers.option1 = true;
      if (evt.target.value === gameModel.getData().answers[0].type) {
        this.answers.value1 = true;
      }
    }
    if (evt.target.name === 'question2') {
      this.answers.option2 = true;
      if (evt.target.value === gameModel.getData().answers[1].type) {
        this.answers.value2 = true;
      }
    }
    this.checkAnswers(QuestionType.TWO_OF_TWO);
  }

  _onAnswer3(evt) {
    this.answer = gameModel.getData().answers[Number(evt.target.id)].type;
    this.counter = 0;
    for (let i = 0; i < 3; i++) {
      if (this.answer === gameModel.getData().answers[i].type) {
        this.counter++;
      }
    }
    if (this.counter === 1) {
      this.answers.value1 = true;
    }
    this.checkAnswers(QuestionType.ONE_OF_THREE);
  }

}

export default () => {
  const game = new GamePresenter();
  game.element.onshow = () => game.levelInit();
  return game.element;
};
