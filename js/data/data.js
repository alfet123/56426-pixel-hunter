
export const param = {
  baseUrl: 'https://intensive-ecmascript-server-dxttmcdylw.now.sh/pixel-hunter/stats/',
  user: ''
};

export const QuestionType = {
  TWO_OF_TWO: 'two-of-two',
  TINDER_LIKE: 'tinder-like',
  ONE_OF_THREE: 'one-of-three'
};

export const Answer = {
  CORRECT: 'correct',
  WRONG: 'wrong',
  FAST: 'fast',
  SLOW: 'slow'
};

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

export const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};
