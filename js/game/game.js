
export const initialState = {
  time: 30,
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

export const getStats = (result) => {
  let stats = '<ul class="stats">';
  for (let i = 0; i < result.length; i++) {
    stats += '<li class="stats__result stats__result--' + result[i] + '"></li>';
  }
  stats += '</ul>';
  return stats;
};
