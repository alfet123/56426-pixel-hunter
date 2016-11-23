
import {getElementFromTemplate} from './lib';

const stats = {
  title: 'Победа!',
  result1: {
    number: '1.',
    points: '×&nbsp;100',
    total: '900',
    extra1: {
      name: 'Бонус за скорость:',
      value: '1&nbsp;',
      points: '×&nbsp;50',
      total: '50'
    },
    extra2: {
      name: 'Бонус за жизни:',
      value: '2&nbsp;',
      points: '×&nbsp;50',
      total: '100'
    },
    extra3: {
      name: 'Штраф за медлительность:',
      value: '2&nbsp;',
      points: '×&nbsp;50',
      total: '-100'
    },
    final: '950'
  },
  result2: {
    number: '2.',
    final: 'fail'
  },
  result3: {
    number: '3.',
    points: '×&nbsp;100',
    total: '900',
    extra1: {
      name: 'Бонус за жизни:',
      value: '2&nbsp;',
      points: '×&nbsp;50',
      total: '100'
    },
    final: '1000'
  }
};

const header = `<header class="header">
  <div class="header__back">
    <span class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.png" width="101" height="44">
    </span>
  </div>
</header>`;

const result1 = `<table class="result__table">
    <tr>
      <td class="result__number">${stats.result1.number}</td>
      <td colspan="2">
        <ul class="stats">
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--correct"></li>
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--unknown"></li>
        </ul>
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
        <ul class="stats">
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--correct"></li>
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--wrong"></li>
        </ul>
      </td>
      <td class="result__total"></td>
      <td class="result__total  result__total--final">${stats.result2.final}</td>
    </tr>
  </table>`;

const result3 = `<table class="result__table">
    <tr>
      <td class="result__number">${stats.result3.number}</td>
      <td colspan="2">
        <ul class="stats">
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--correct"></li>
          <li class="stats__result stats__result--wrong"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--slow"></li>
          <li class="stats__result stats__result--unknown"></li>
          <li class="stats__result stats__result--fast"></li>
          <li class="stats__result stats__result--unknown"></li>
        </ul>
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

export {statsElement};
