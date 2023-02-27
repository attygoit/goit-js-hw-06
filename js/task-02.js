const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const items = ingredients.map(item => {
  const itemEl = document.createElement('li');
  itemEl.textContent = item;
  itemEl.classList = 'item';
  return itemEl;
})
  
document.querySelector('#ingredients').append(...items);

