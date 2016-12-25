
import AbstractView from '../view';
import Application from '../application';
import HeaderView from '../game/header-view';
import {param, Answer, getStats, status} from '../data/data';

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
    this.userStats = null;
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
        then(status).
        then((data) => {
          window.console.log('Request succeeded with JSON response', data);
        }).
        catch((error) => {
          window.console.log('Request failed', error);
        });
  }

  loadStats() {
    const url = 'https://intensive-ecmascript-server-dxttmcdylw.now.sh/pixel-hunter/stats/' + param.user;

    window.fetch(url).
        then(status).
        then((response) => response.json()).
        then((data) => {
          this.userStats = data;
        }).
        catch((error) => {
          window.console.log('Request failed', error);
        });
  }

  calcScores(state) {
    const result = {
      correct: 0,
      fast: 0,
      slow: 0,
      score: 0,
      scoreString: '',
      fastBonus: 0,
      livesBonus: 0,
      slowPenalty: 0,
      scoreTotal: 0
    };

    for (let i = 0; i < state.stats.length; ++i) {
      switch (state.stats[i]) {
        case Answer.CORRECT:
          result.correct++;
          break;
        case Answer.FAST:
          result.correct++;
          result.fast++;
          break;
        case Answer.SLOW:
          result.correct++;
          result.slow++;
          break;
      }
    }

    result.score = result.correct * this.factor.points;
    result.scoreString = (result.score > 0) ? result.correct + '&nbsp;×&nbsp;' + this.factor.points : '';
    result.fastBonus = result.fast * this.factor.speed;
    result.livesBonus = state.lives * this.factor.lives;
    result.slowPenalty = result.slow * this.factor.speed;
    result.scoreTotal = (result.score > 0) ? result.score + result.fastBonus + result.livesBonus - result.slowPenalty : 0;

    return result;
  }

  getMarkup() {

    const resultCount = this.userStats.length;
    let resultTable = '';
    let statsTitle = '';

    for (let i = 1; i <= resultCount; ++i) {

      let index = resultCount - i;
      let statItem = this.userStats[index];
      let result = this.calcScores(statItem);

      if ((index + 1) === resultCount) {
        statsTitle = (result.scoreTotal > 0) ? 'Победа!' : 'Поражение';
      }

      resultTable += `<table class="result__table">
          <tr>
            <td class="result__number">${i}.</td>
            <td colspan="2">${getStats(statItem.stats)}</td>
            <td class="result__points">${result.scoreString}</td>
            <td class="result__total">${result.score}</td>
          </tr>`;
      if (result.score > 0) {
        if (result.fastBonus > 0) {
          resultTable += `<tr>
              <td></td>
              <td class="result__extra">Бонус за скорость:</td>
              <td class="result__extra">${result.fast}&nbsp;<span class="stats__result  stats__result--fast"></span></td>
              <td class="result__points">×&nbsp;${this.factor.speed}</td>
              <td class="result__total">${result.fastBonus}</td>
            </tr>`;
        }
        if (result.livesBonus > 0) {
          resultTable += `<tr>
              <td></td>
              <td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${statItem.lives}&nbsp;<span class="stats__result  stats__result--heart"></span></td>
              <td class="result__points">×&nbsp;${this.factor.lives}</td>
              <td class="result__total">${result.livesBonus}</td>
            </tr>`;
        }
        if (result.slowPenalty > 0) {
          resultTable += `<tr>
              <td></td>
              <td class="result__extra">Штраф за медлительность:</td>
              <td class="result__extra">${result.slow}&nbsp;<span class="stats__result  stats__result--slow"></span></td>
              <td class="result__points">×&nbsp;${this.factor.speed}</td>
              <td class="result__total">-${result.slowPenalty}</td>
            </tr>`;
        }
      }
      resultTable += `<tr>
              <td colspan="5" class="result__total  result__total--final">${result.scoreTotal}</td>
            </tr>
          </table>`;

    }

    resultTable += '</div>';

    let resultHeader = `${this.header.getMarkup()}
      <div class="result">
        <h1>${statsTitle}</h1>`;

    return resultHeader + resultTable;
  }

  bindHandlers() {
    this.element.querySelector('.back-btn').onclick = () => Application.showGreeting();
  }

}

export default (state) => {
  const stats = new StatsView(state);
  stats.sendStats();
  stats.loadStats();
  return stats.element;
};
