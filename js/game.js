
import {getElementFromTemplate, select, drawLives} from './lib';
import statsElement from './stats';
import {markup, getContent, getStats} from './markup';
import {gameData, gameState} from './data';

export default () => {

  let timerId;
  let timerValue;
  let gameInputs;

  const answers = {
    option1: false,
    option2: false,
    value1: false,
    value2: false
  };

  const header = `<header class="header">
      ${markup.header.back}
      ${markup.header.timer}
      ${markup.header.lives.block}
    </header>`;

  const gameTemplate = `${header}
    <div class="game"></div>`;

  const gameElement = getElementFromTemplate(gameTemplate);
  const gameTimerElement = gameElement.querySelector('.game__timer');
  const gameContent = gameElement.querySelector('.game');

  const levelsCount = gameData.length;
  let currentLevel = 0;

  const nextLevel = () => {
    currentLevel++;
    if ((currentLevel < levelsCount) && (gameState.lives.left > 0)) {
      levelInit(currentLevel);
    } else {
      select(statsElement());
    }
  };

  const answerCorrect = () => {
    answers.value1 = false;
    answers.value2 = false;
    gameState.answers.correct++; // ответ верный
    gameState.levels[currentLevel] = 'correct';
    if (timerValue > 20) {
      gameState.answers.fast++; // ответ быстрый
      gameState.levels[currentLevel] = 'fast';
    }
    if (timerValue < 10) {
      gameState.answers.slow++; // ответ медленный
      gameState.levels[currentLevel] = 'slow';
    }
  };

  // Обработчик таймера

  const gameTimer = () => {
    if (timerValue > 0) {
      timerValue--;
      gameTimerElement.innerHTML = timerValue;
    } else {
      clearInterval(timerId); // удаление таймера после 30 сек.
      gameState.lives.left--;
      gameState.levels[currentLevel] = 'wrong';
      nextLevel();
    }
  };

  // Функция проверки ответов

  const checkAnswers = (gameType) => {
    if (gameType === '2') {
      if (answers.option1 && answers.option2) {
        clearInterval(timerId); // удаление таймера после выбора ответа на каждом изображении
        answers.option1 = false;
        answers.option2 = false;
        if (answers.value1 && answers.value2) {
          answerCorrect();
        } else {
          answers.value1 = false;
          answers.value2 = false;
          gameState.lives.left--; // ответ неверный
          gameState.levels[currentLevel] = 'wrong';
        }
        nextLevel();
      }
    } else {
      clearInterval(timerId); // удаление таймера после выбора ответа
      if (answers.value1) {
        answerCorrect();
      } else {
        gameState.lives.left--; // ответ неверный
        gameState.levels[currentLevel] = 'wrong';
      }
      nextLevel();
    }
  };

  // Обработчик клика 1

  const onAnswer1 = (evt) => {
    if (evt.target.value === gameData[currentLevel].answer.question1) {
      answers.value1 = true;
    }
    checkAnswers('1');
  };

  // Обработчик клика 2

  const onAnswer2 = (evt) => {
    if (evt.target.name === 'question1') {
      answers.option1 = true;
      if (evt.target.value === gameData[currentLevel].answer.question1) {
        answers.value1 = true;
      }
    }
    if (evt.target.name === 'question2') {
      answers.option2 = true;
      if (evt.target.value === gameData[currentLevel].answer.question2) {
        answers.value2 = true;
      }
    }
    checkAnswers('2');
  };

  // Обработчик клика 3

  const onAnswer3 = (evt) => {
    if (evt.target.title === gameData[currentLevel].answer) {
      answers.value1 = true;
    }
    checkAnswers('3');
  };

  const levelInit = (level) => {

    // Вывод жизней

    drawLives(gameState.lives.left, gameState.lives.total);

    // Вывод данных уровня

    const task = '<p class="game__task">' + gameData[level].task + '</p>';
    const content = getContent(gameData[level]);
    const stats = getStats(gameState.levels);

    gameContent.innerHTML = `${task}
      ${content}
      ${stats}`;

    // Установка обработчиков на варианты ответов

    switch (gameData[level].type) {
      case '1':
        gameInputs = gameContent.querySelectorAll('input');
        for (let i = 0; i < gameInputs.length; ++i) {
          gameInputs[i].onclick = onAnswer1;
        }
        break;
      case '2':
        gameInputs = gameContent.querySelectorAll('input');
        for (let j = 0; j < gameInputs.length; ++j) {
          gameInputs[j].onclick = onAnswer2;
        }
        break;
      case '3':
        gameInputs = gameContent.querySelectorAll('.game__option');
        for (let k = 0; k < gameInputs.length; ++k) {
          gameInputs[k].onclick = onAnswer3;
        }
        break;
    }

    // Инициализация и запуск таймера

    timerValue = 30;
    gameTimerElement.innerHTML = timerValue;
    timerId = setInterval(gameTimer, 1000);

  };

  gameElement.onshow = () => levelInit(currentLevel);

  return gameElement;

};
