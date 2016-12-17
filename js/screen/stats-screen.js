
import AbstractView from '../view';
import Application from '../application';
import HeaderView from '../game/header-view';
import {getStats} from '../game/game';
import {initialState} from '../game/game';

class StatsView extends AbstractView {

  constructor(gameState) {
    super();
    this._state = gameState;
    this.header = new HeaderView();
  }

  getMarkup() {
    const factor = {
      points: 100,
      speed: 50,
      lives: 50
    };

    const score = this._state.answers.correct * factor.points;
    const scoreString = (score > 0) ? this._state.answers.correct + '&nbsp;×&nbsp;' + factor.points : '';
    const fastBonus = this._state.answers.fast * factor.speed;
    const livesBonus = this._state.lives.left * factor.lives;
    const slowPenalty = this._state.answers.slow * factor.speed;

    const scoreTotal = (score > 0) ? score + fastBonus + livesBonus - slowPenalty : 0;

    const statsTitle = (scoreTotal > 0) ? 'Победа!' : 'Поражение';

    let result = `${this.header.getMarkup()}
      <div class="result">
        <h1>${statsTitle}</h1>
        <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">${getStats(this._state.levels)}</td>
          <td class="result__points">${scoreString}</td>
          <td class="result__total">${score}</td>
        </tr>`;
    if (score > 0) {
      if (fastBonus > 0) {
        result += `<tr>
            <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">${this._state.answers.fast}&nbsp;<span class="stats__result  stats__result--fast"></span></td>
            <td class="result__points">×&nbsp;${factor.speed}</td>
            <td class="result__total">${fastBonus}</td>
          </tr>`;
      }
      if (livesBonus > 0) {
        result += `<tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${this._state.lives.left}&nbsp;<span class="stats__result  stats__result--heart"></span></td>
            <td class="result__points">×&nbsp;${factor.lives}</td>
            <td class="result__total">${livesBonus}</td>
          </tr>`;
      }
      if (slowPenalty > 0) {
        result += `<tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">${this._state.answers.slow}&nbsp;<span class="stats__result  stats__result--slow"></span></td>
            <td class="result__points">×&nbsp;${factor.speed}</td>
            <td class="result__total">-${slowPenalty}</td>
          </tr>`;
      }
    }
    result += `<tr>
            <td colspan="5" class="result__total  result__total--final">${scoreTotal}</td>
          </tr>
        </table>
      </div>`;

    return result;
  }

  bindHandlers() {
    this.element.querySelector('.header__back').onclick = (evt) => Application.showGreeting();
  }

}

export default () => new StatsView(initialState).element;
