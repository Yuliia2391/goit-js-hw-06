const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  return li;
});

list.append(...items);
console.log(list);

// ingredients.forEach(ingredient => {
//   const li = document.createElement('li');
//   li.classList.add('item');
//   li.textContent = ingredient;
//   list.append(li);
// });

// console.log(ingredients);
// console.log(list);