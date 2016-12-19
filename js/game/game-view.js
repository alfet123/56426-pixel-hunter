
import AbstractView from '../view';
import {getStats} from '../game/game';

export default class GameView extends AbstractView {

  constructor(levelState, levelData) {
    super();
    this.state = levelState;
    this.data = levelData;
  }

  getMarkup() {
    this.content = '<p class="game__task">' + this.data.task + '</p>';

    switch (this.data.type) {
      case '1':
        this.content += `<form class="game__content  game__content--wide">
            <div class="game__option">
              <img src="${this.data.content.option1.image}" alt="${this.data.content.option1.alt}" width="705" height="455">
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
      case '2':
        this.content += `<form class="game__content">
            <div class="game__option">
              <img src="${this.data.content.option1.image}" alt="${this.data.content.option1.alt}" width="468" height="458">
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
              <img src="${this.data.content.option2.image}" alt="${this.data.content.option2.alt}" width="468" height="458">
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
      case '3':
        this.content += `<form class="game__content  game__content--triple">
            <div class="game__option" title="img1">
              <img src="${this.data.content.option1.image}" alt="${this.data.content.option1.alt}" width="304" height="455">
            </div>
            <div class="game__option" title="img2">
              <img src="${this.data.content.option2.image}" alt="${this.data.content.option2.alt}" width="304" height="455">
            </div>
            <div class="game__option" title="img3">
              <img src="${this.data.content.option3.image}" alt="${this.data.content.option3.alt}" width="304" height="455">
            </div>
          </form>`;
        break;
      default:
        this.content += `<form class="game__content">
          </form>`;
    }

    this.content += getStats(this.state.levels);

    return this.content;
  }

  bindHandlers() {
    return super.bindHandlers();
  }

}
