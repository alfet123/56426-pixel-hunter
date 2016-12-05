
const intro = {
  title: '*',
  text: 'Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.'
};

const greeting = {
  logo: 'Pixel Hunter',
  title: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
  text: 'Правила игры просты.<br>Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>Задача кажется тривиальной, но не думай, что все так просто.<br>Фотореализм обманчив и коварен.<br>Помни, главное — смотреть очень внимательно.',
  continue: 'Next'
};

const rules = {
  title: 'Правила',
  description: {
    text1: 'Угадай 10 раз для каждого изображения фото',
    text2: 'или рисунок',
    text3: '.<br>Фотографиями или рисунками могут быть оба изображения.<br>На каждую попытку отводится 30 секунд.<br>Ошибиться можно не более 3 раз.<br><br>Готовы?'
  },
  form: {
    input: 'Ваше Имя',
    button: 'Go!'
  }
};

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

const gameData = [
  {
    type: '2',
    task: 'Угадайте для каждого изображения фото или рисунок?',
    content: {
      option1: {
        image: 'http://placehold.it/468x458',
        alt: 'Option 1'
      },
      option2: {
        image: 'http://placehold.it/468x458',
        alt: 'Option 2'
      }
    },
    answer: {
      question1: 'paint',
      question2: 'photo'
    }
  },
  {
    type: '1',
    task: 'Угадай, фото или рисунок?',
    content: {
      option1: {
        image: 'http://placehold.it/705x455',
        alt: 'Option 1'
      }
    },
    answer: {
      question1: 'paint'
    }
  },
  {
    type: '3',
    task: 'Найдите рисунок среди изображений',
    content: {
      option1: {
        image: 'http://placehold.it/304x455',
        alt: 'Option 1'
      },
      option2: {
        image: 'http://placehold.it/304x455',
        alt: 'Option 2'
      },
      option3: {
        image: 'http://placehold.it/304x455',
        alt: 'Option 3'
      }
    },
    answer: 'option3'
  }
];

const gameState = {
  lives: {
    total: 3,
    left: 3
  },
  answers: {
    correct: 0,
    wrong: 0,
    fast: 0,
    slow: 0
  }
};

export {intro};
export {greeting};
export {rules};
export {stats};
export {gameData};
export {gameState};
