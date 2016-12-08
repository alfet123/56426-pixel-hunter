
import {getElementFromTemplate} from './lib';
import {markup, getStats} from './markup';
import {gameState} from './data';

export default () => {

  const factor = {
    points: 100,
    speed: 50,
    lives: 50
  };

  const score = gameState.answers.correct * factor.points;
  const scoreString = (score > 0) ? gameState.answers.correct + '&nbsp;×&nbsp;' + factor.points : '';
  const fastBonus = gameState.answers.fast * factor.speed;
  const livesBonus = gameState.lives.left * factor.lives;
  const slowPenalty = gameState.answers.slow * factor.speed;

  const scoreTotal = score + fastBonus + livesBonus - slowPenalty;

  const statsTitle = (scoreTotal > 0) ? 'Победа!' : 'Поражение';

  const header = `<header class="header">
    ${markup.header.back}
  </header>`;

  let result = `<table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">${getStats(gameState.levels)}</td>
        <td class="result__points">${scoreString}</td>
        <td class="result__total">${score}</td>
      </tr>`;
  if (fastBonus > 0) {
    result += `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${gameState.answers.fast}&nbsp;<span class="stats__result  stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;${factor.speed}</td>
          <td class="result__total">${fastBonus}</td>
        </tr>`;
  }
  if (livesBonus > 0) {
    result += `<tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${gameState.lives.left}&nbsp;<span class="stats__result  stats__result--heart"></span></td>
          <td class="result__points">×&nbsp;${factor.lives}</td>
          <td class="result__total">${livesBonus}</td>
        </tr>`;
  }
  if (slowPenalty > 0) {
    result += `<tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${gameState.answers.slow}&nbsp;<span class="stats__result  stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;${factor.speed}</td>
          <td class="result__total">-${slowPenalty}</td>
        </tr>`;
  }
  result += `<tr>
        <td colspan="5" class="result__total  result__total--final">${scoreTotal}</td>
      </tr>
    </table>`;

  const statsTemplate = `${header}
  <div class="result">
    <h1>${statsTitle}</h1>
    ${result}
  </div>`;

  const statsElement = getElementFromTemplate(statsTemplate);

  return statsElement;

};
