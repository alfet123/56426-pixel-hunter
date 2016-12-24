
import AbstractView from '../view';
import Application from '../application';
import HeaderView from '../game/header-view';
import {param, getStats} from '../data/data';

class StatsView extends AbstractView {

  constructor(gameState) {
    super();
    this._state = Object.assign({}, gameState);
    this.header = new HeaderView();
    this.factor = {
      points: 100,
      speed: 50,
      lives: 50
    };
    this.newStat = {};
  }

  sendStats() {
    const url = 'https://intensive-ecmascript-server-dxttmcdylw.now.sh/pixel-hunter/stats/' + param.user;

    this.newStat.stats = this._state.levels.slice(0);
    this.newStat.lives = this._state.lives.left;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.newStat),
      headers: {
        'Content-Type': 'application/json'
      }
    }).
        then(this.status).
        then(function (data) {
          window.console.log('Request succeeded with JSON response', data);
        }).
        catch(function (error) {
          window.console.log('Request failed', error);
        });
  }

  getMarkup() {
    let score = this._state.answers.correct * this.factor.points;
    let scoreString = (score > 0) ? this._state.answers.correct + '&nbsp;×&nbsp;' + this.factor.points : '';
    let fastBonus = this._state.answers.fast * this.factor.speed;
    let livesBonus = this._state.lives.left * this.factor.lives;
    let slowPenalty = this._state.answers.slow * this.factor.speed;

    let scoreTotal = (score > 0) ? score + fastBonus + livesBonus - slowPenalty : 0;

    let statsTitle = (scoreTotal > 0) ? 'Победа!' : 'Поражение';

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
            <td class="result__points">×&nbsp;${this.factor.speed}</td>
            <td class="result__total">${fastBonus}</td>
          </tr>`;
      }
      if (livesBonus > 0) {
        result += `<tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${this._state.lives.left}&nbsp;<span class="stats__result  stats__result--heart"></span></td>
            <td class="result__points">×&nbsp;${this.factor.lives}</td>
            <td class="result__total">${livesBonus}</td>
          </tr>`;
      }
      if (slowPenalty > 0) {
        result += `<tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">${this._state.answers.slow}&nbsp;<span class="stats__result  stats__result--slow"></span></td>
            <td class="result__points">×&nbsp;${this.factor.speed}</td>
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

  status(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  }

  bindHandlers() {
    this.element.querySelector('.back-btn').onclick = () => Application.showGreeting();
  }

}

export default (state) => {
  const stats = new StatsView(state);
  stats.sendStats();
  return stats.element;
};
