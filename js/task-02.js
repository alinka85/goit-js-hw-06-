const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');
const listItems = ingredients.map((ingredient) => {
const itemElem = document.createElement('li');
itemElem.classList.add('item');
const listElem = document.createElement('p');
listElem.textContent = ingredient;
itemElem.append(listElem);
return itemElem;
});

listRef.append(...listItems);