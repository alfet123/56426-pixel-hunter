
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
      question1: 'photo',
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
      question1: 'photo'
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
    answer: 'img1'
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
      question2: 'paint'
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
    answer: 'img3'
  },
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
      question1: 'photo',
      question2: 'paint'
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
      question1: 'photo'
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
    answer: 'img2'
  },
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
  }
];

const gameState = {
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

export {gameData};
export {gameState};
