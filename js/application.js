
import introScreen from './screen/intro-screen';
import greetingScreen from './screen/greeting-screen';
import rulesScreen from './screen/rules-screen';
import gameScreen from './screen/game-screen';
import statsScreen from './screen/stats-screen';
import errorScreen from './screen/error-screen';

const main = document.getElementById('main');
const switcher = document.createElement('div');
switcher.innerHTML = '' +
  '<span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>   ' +
  '<span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>';
switcher.style.cssText = 'text-align: center';
main.after(switcher);
const changeView = (element) => {
  main.innerHTML = '';
  main.appendChild(element);
};

let gameData;

export default class Application {

  static showIntro() {
    changeView(introScreen());
  }

  static showGreeting() {
    changeView(greetingScreen());
  }

  static showRules() {
    changeView(rulesScreen());
  }

  static showGame() {
    const element = gameScreen(gameData);
    changeView(element);
    element.onshow();
  }

  static showStats(state) {
    changeView(statsScreen(state));
  }

  static showError(error) {
    changeView(errorScreen(error));
  }

  static set data(data) {
    gameData = data;
  }

}
