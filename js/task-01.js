const categoriesList = document.querySelector('#categories');
const categoriesItems = document.querySelector('.item');
console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
});
