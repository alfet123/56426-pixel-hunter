
import {select} from './lib';
import AbstractView from './view';
import GreetingView from './greeting-view';

export default class IntroView extends AbstractView {

  constructor() {
    super();
    this.greeting = new GreetingView();
  }

  getMarkup() {
    return `
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>`;
  }

  bindHandlers() {
    this.element.querySelector('.intro__asterisk').onclick = () => select(this.greeting.element);
  }

}
