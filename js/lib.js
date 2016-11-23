
const getElementFromTemplate = (templateContent) => {
  let node = document.createElement('span');
  node.innerHTML += templateContent;
  return node.cloneNode(true);
};

const select = (templateElement) => {
  let mainElement = document.getElementById('main');
  mainElement.innerHTML = '';
  mainElement.appendChild(templateElement);
};

export {getElementFromTemplate, select};
