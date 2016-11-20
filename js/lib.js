(function () {

  const getElementFromTemplate = (templateContent) => {
    let node = document.createElement('span');
    node.innerHTML += templateContent;
    return node.cloneNode(true);
  }

  export default getElementFromTemplate;

})();
