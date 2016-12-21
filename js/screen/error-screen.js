
import AbstractView from '../view';

class ErrorView extends AbstractView {

  constructor(error) {
    super();
    this.error = error;
  }

  getMarkup() {
    return `
      <div class="end">
        <p>Произошла ошибка: ${this.error.message}</p>
      </div>`;
  }

}

export default (error) => new ErrorView(error).element;
