const Categories = document.querySelectorAll('#categories');
console.log(`Number of categories: ${categories.children.length}`);

const countCategories = categories.querySelectorAll('.item');
//console.log(countCategories);

countCategories.forEach((item) => {
console.log(`Category: ${item.querySelector('h2').textContent}`);
console.log(`Elements: ${item.querySelectorAll('li').length}`);
    
}); 
