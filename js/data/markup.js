
const getStats = (result) => {
  let stats = '<ul class="stats">';
  for (let i = 0; i < result.length; i++) {
    stats += '<li class="stats__result stats__result--' + result[i] + '"></li>';
  }
  stats += '</ul>';
  return stats;
};

export {getStats};
