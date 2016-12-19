
export const initialState = {
  level: 0,
  timer: {
    init: 30,
    value: 30
  },
  lives: {
    total: 3,
    left: 3
  },
  levels: [
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown',
    'unknown'
  ],
  answers: {
    correct: 0,
    fast: 0,
    slow: 0
  }
};

export const getStats = (levels) => {
  let stats = '<ul class="stats">';
  for (let i = 0; i < levels.length; i++) {
    stats += '<li class="stats__result stats__result--' + levels[i] + '"></li>';
  }
  stats += '</ul>';
  return stats;
};