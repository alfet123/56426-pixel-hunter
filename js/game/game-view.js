
import AbstractView from '../view';
import {QuestionType, getStats} from '../game/game';

export default class GameView extends AbstractView {

  constructor(levelState, levelData) {
    super();
    this.state = levelState;
    this.data = levelData;
  }

  getMarkup() {
    this.content = '<p class="game__task">' + this.data.question + '</p>';

    switch (this.data.type) {
      case QuestionType.TINDER_LIKE:
        this.content += `<form class="game__content  game__content--wide">
            <div class="game__option">
              <img src="${this.data.answers[0].image.url}" alt="Option 1" width="${this.data.answers[0].image.width}" height="${this.data.answers[0].image.height}">
              <label class="game__answer  game__answer--photo">
                <input name="question1" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer  game__answer--paint">
                <input name="question1" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
          </form>`;
        break;
      case QuestionType.TWO_OF_TWO:
        this.content += `<form class="game__content">
            <div class="game__option">
              <img src="${this.data.answers[0].image.url}" alt="Option 1" width="${this.data.answers[0].image.width}" height="${this.data.answers[0].image.height}">
              <label class="game__answer  game__answer--photo">
                <input name="question1" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer  game__answer--paint">
                <input name="question1" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
            <div class="game__option">
              <img src="${this.data.answers[1].image.url}" alt="Option 2" width="${this.data.answers[1].image.width}" height="${this.data.answers[1].image.height}">
              <label class="game__answer  game__answer--photo">
                <input name="question2" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer  game__answer--paint">
                <input name="question2" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
          </form>`;
        break;
      case QuestionType.ONE_OF_THREE:
        this.content += `<form class="game__content  game__content--triple">
            <div class="game__option" title="img1">
              <img src="${this.data.answers[0].image.url}" alt="Option 1" width="${this.data.answers[0].image.width}" height="${this.data.answers[0].image.height}">
            </div>
            <div class="game__option" title="img2">
              <img src="${this.data.answers[1].image.url}" alt="Option 2" width="${this.data.answers[1].image.width}" height="${this.data.answers[1].image.height}">
            </div>
            <div class="game__option" title="img3">
              <img src="${this.data.answers[2].image.url}" alt="Option 3" width="${this.data.answers[2].image.width}" height="${this.data.answers[2].image.height}">
            </div>
          </form>`;
        break;
    }

    this.content += getStats(this.state.levels);

    return this.content;
  }

  bindHandlers() {
    return super.bindHandlers();
  }

}
