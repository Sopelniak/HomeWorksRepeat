const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);

const categoriesItems = Array.from(list.children);

// const categoriesItems = categories.querySelectorAll("li.item");

categoriesItems.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
