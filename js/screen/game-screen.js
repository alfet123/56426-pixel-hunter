
import GameModel from '../game/game-model';
import GameView from '../game/game-view';
import HeaderView from '../game/header-view';
import Application from '../application';
import {QuestionType} from '../data/data';
import imageLoader from '../image-loader/image-loader';

class GamePresenter {

  constructor(model) {
    this.model = model;
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
    const state = this.model.getState();
    const data = this.model.getData();
    const header = new HeaderView(state);
    const content = new GameView(state, data);

    this.element.innerHTML = `${header.getMarkup(true)}
      <div class="game">${content.getMarkup()}</div>`;

    const options = this.element.querySelectorAll('.game__option');
    for (let i = 0; i < options.length; i++) {
      imageLoader(document.querySelectorAll('.game__option img')[i]).load({
        url: data.answers[i].image.url
      }, data.answers[i].image.width, data.answers[i].image.height);
    }

    this.timerElement = this.element.querySelector('.game__timer');
    this.bindHandlers();
    this.runTimer();
  }

  bindHandlers() {
    this.element.querySelector('.back-btn').onclick = () => Application.showGreeting();
    switch (this.model.getData().type) {
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
    this.model.initTimer();
    this.timerElement.innerHTML = this.model.getTimer();
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
          this.model.wrong();
        }
        this.nextLevel();
      }
    } else {
      clearInterval(this.timerId);
      if (this.answers.value1) {
        this.answerCorrect();
      } else {
        this.model.wrong();
      }
      this.nextLevel();
    }
  }

  answerCorrect() {
    this.answers.value1 = false;
    this.answers.value2 = false;
    this.model.correct();
    if (this.model.getTimer() > 20) {
      this.model.fast();
    }
    if (this.model.getTimer() < 10) {
      this.model.slow();
    }
  }

  nextLevel() {
    this.model.nextLevel();
    if (this.model.hasLevel() && this.model.hasLives()) {
      this.levelInit();
    } else {
      Application.showStats(this.model.getState());
    }
  }

  _gameTimer() {
    if (this.model.getTimer() > 0) {
      this.model.tick();
      this.timerElement.innerHTML = this.model.getTimer();
    } else {
      clearInterval(this.timerId);
      this.model.wrong();
      this.nextLevel();
    }
  }

  _onAnswer1(evt) {
    if (evt.target.value === this.model.getData().answers[0].type) {
      this.answers.value1 = true;
    }
    this.checkAnswers(QuestionType.TINDER_LIKE);
  }

  _onAnswer2(evt) {
    if (evt.target.name === 'question1') {
      this.answers.option1 = true;
      if (evt.target.value === this.model.getData().answers[0].type) {
        this.answers.value1 = true;
      }
    }
    if (evt.target.name === 'question2') {
      this.answers.option2 = true;
      if (evt.target.value === this.model.getData().answers[1].type) {
        this.answers.value2 = true;
      }
    }
    this.checkAnswers(QuestionType.TWO_OF_TWO);
  }

  _onAnswer3(evt) {
    this.answer = this.model.getData().answers[Number(evt.target.id)].type;
    this.counter = 0;
    for (let i = 0; i < 3; i++) {
      if (this.answer === this.model.getData().answers[i].type) {
        this.counter++;
      }
    }
    if (this.counter === 1) {
      this.answers.value1 = true;
    }
    this.checkAnswers(QuestionType.ONE_OF_THREE);
  }

}

export default (gameData) => {
  const game = new GamePresenter(new GameModel(gameData));
  game.element.onshow = () => game.levelInit();
  return game.element;
};
