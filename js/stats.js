
import {getElementFromTemplate} from './lib';
import {common} from './markup';
import {stats} from './data';

export default () => {

  const header = `<header class="header">
    ${common.header.back}
  </header>`;

  const result1 = `<table class="result__table">
      <tr>
        <td class="result__number">${stats.result1.number}</td>
        <td colspan="2">
          ${common.stats}
        </td>
        <td class="result__points">${stats.result1.points}</td>
        <td class="result__total">${stats.result1.total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${stats.result1.extra1.name}</td>
        <td class="result__extra">${stats.result1.extra1.value}<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">${stats.result1.extra1.points}</td>
        <td class="result__total">${stats.result1.extra1.total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${stats.result1.extra2.name}</td>
        <td class="result__extra">${stats.result1.extra2.value}<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">${stats.result1.extra2.points}</td>
        <td class="result__total">${stats.result1.extra2.total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${stats.result1.extra3.name}</td>
        <td class="result__extra">${stats.result1.extra3.value}<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">${stats.result1.extra3.points}</td>
        <td class="result__total">${stats.result1.extra3.total}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${stats.result1.final}</td>
      </tr>
    </table>`;

  const result2 = `<table class="result__table">
      <tr>
        <td class="result__number">${stats.result2.number}</td>
        <td>
          ${common.stats}
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">${stats.result2.final}</td>
      </tr>
    </table>`;

  const result3 = `<table class="result__table">
      <tr>
        <td class="result__number">${stats.result3.number}</td>
        <td colspan="2">
          ${common.stats}
        </td>
        <td class="result__points">${stats.result3.points}</td>
        <td class="result__total">${stats.result3.total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${stats.result3.extra1.name}</td>
        <td class="result__extra">${stats.result3.extra1.value}<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">${stats.result3.extra1.points}</td>
        <td class="result__total">${stats.result3.extra1.total}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${stats.result3.final}</td>
      </tr>
    </table>`;

  const statsTemplate = `${header}
  <div class="result">
    <h1>${stats.title}</h1>
    ${result1}
    ${result2}
    ${result3}
  </div>`;

  const statsElement = getElementFromTemplate(statsTemplate);

  return statsElement;

};
