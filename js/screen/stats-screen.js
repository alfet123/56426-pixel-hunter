
import AbstractView from '../view';
import Application from '../application';
import HeaderView from '../game/header-view';
import {getStats} from '../game/game';

class StatsView extends AbstractView {

  constructor(gameState) {
    super();
    this.state = Object.assign({}, gameState);
    this.header = new HeaderView();
    this.factor = {
      points: 100,
      speed: 50,
      lives: 50
    };
  }

  getMarkup() {
    this.score = this.state.answers.correct * this.factor.points;
    this.scoreString = (this.score > 0) ? this.state.answers.correct + '&nbsp;×&nbsp;' + this.factor.points : '';
    this.fastBonus = this.state.answers.fast * this.factor.speed;
    this.livesBonus = this.state.lives.left * this.factor.lives;
    this.slowPenalty = this.state.answers.slow * this.factor.speed;

    this.scoreTotal = (this.score > 0) ? this.score + this.fastBonus + this.livesBonus - this.slowPenalty : 0;

    this.statsTitle = (this.scoreTotal > 0) ? 'Победа!' : 'Поражение';

    this.result = `${this.header.getMarkup()}
      <div class="result">
        <h1>${this.statsTitle}</h1>
        <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">${getStats(this.state.levels)}</td>
          <td class="result__points">${this.scoreString}</td>
          <td class="result__total">${this.score}</td>
        </tr>`;
    if (this.score > 0) {
      if (this.fastBonus > 0) {
        this.result += `<tr>
            <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">${this.state.answers.fast}&nbsp;<span class="stats__result  stats__result--fast"></span></td>
            <td class="result__points">×&nbsp;${this.factor.speed}</td>
            <td class="result__total">${this.fastBonus}</td>
          </tr>`;
      }
      if (this.livesBonus > 0) {
        this.result += `<tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${this.state.lives.left}&nbsp;<span class="stats__result  stats__result--heart"></span></td>
            <td class="result__points">×&nbsp;${this.factor.lives}</td>
            <td class="result__total">${this.livesBonus}</td>
          </tr>`;
      }
      if (this.slowPenalty > 0) {
        this.result += `<tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">${this.state.answers.slow}&nbsp;<span class="stats__result  stats__result--slow"></span></td>
            <td class="result__points">×&nbsp;${this.factor.speed}</td>
            <td class="result__total">-${this.slowPenalty}</td>
          </tr>`;
      }
    }
    this.result += `<tr>
            <td colspan="5" class="result__total  result__total--final">${this.scoreTotal}</td>
          </tr>
        </table>
      </div>`;

    return this.result;
  }

  bindHandlers() {
    this.element.querySelector('.back-btn').onclick = () => Application.showGreeting();
  }

}

export default (state) => new StatsView(state).element;
