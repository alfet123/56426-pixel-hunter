
const markup = {
  header: {
    back: `
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>`,
    timer: '<h1 class="game__timer">NN</h1>',
    lives: {
      block: '<div class="game__lives"></div>',
      empty: '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">',
      full: '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">'
    }
  }
};

const getContent = (data) => {

  let content;

  switch (data.type) {
    case '1':
      content = `<form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${data.content.option1.image}" alt="${data.content.option1.alt}" width="705" height="455">
            <label class="game__answer  game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
        </form>`;
      break;
    case '2':
      content = `<form class="game__content">
          <div class="game__option">
            <img src="${data.content.option1.image}" alt="${data.content.option1.alt}" width="468" height="458">
            <label class="game__answer  game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
          <div class="game__option">
            <img src="${data.content.option2.image}" alt="${data.content.option2.alt}" width="468" height="458">
            <label class="game__answer  game__answer--photo">
              <input name="question2" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--paint">
              <input name="question2" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
        </form>`;
      break;
    case '3':
      content = `<form class="game__content  game__content--triple">
          <div class="game__option" title="img1">
            <img src="${data.content.option1.image}" alt="${data.content.option1.alt}" width="304" height="455">
          </div>
          <div class="game__option" title="img2">
            <img src="${data.content.option2.image}" alt="${data.content.option2.alt}" width="304" height="455">
          </div>
          <div class="game__option" title="img3">
            <img src="${data.content.option3.image}" alt="${data.content.option3.alt}" width="304" height="455">
          </div>
        </form>`;
      break;
    default:
      content = `<form class="game__content">
        </form>`;
  }

  return content;
};

const getStats = (result) => {
  let stats = '<ul class="stats">';
  for (let i = 0; i < result.length; i++) {
    stats += '<li class="stats__result stats__result--' + result[i] + '"></li>';
  }
  stats += '</ul>';
  return stats;
};

export {markup};
export {getContent};
export {getStats};
