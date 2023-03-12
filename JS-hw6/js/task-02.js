const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const items = ingredients.map((elem) => {
  const item = document.createElement("li");
  item.textContent = elem;
  item.classList.add("item");
  return item;
});

list.append(...items);

console.log(list);
