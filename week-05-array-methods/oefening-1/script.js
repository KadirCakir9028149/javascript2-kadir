const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

const renderScores = (selector, values) => {
  const list = document.querySelector(selector);
  const items = values.map(score => {
    const item = document.createElement('li');
    item.textContent = score;
    return item;
  });

  list.replaceChildren(...items);
};

const scoresAbove50 = scores.filter(score => score > 50);
const doubledScores = scores.map(score => score * 2);
const sortedScores = [...scores].sort((a, b) => a - b);

renderScores('#result-filtered', scoresAbove50);
renderScores('#result-map', doubledScores);
renderScores('#result-sorted', sortedScores);
