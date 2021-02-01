let items = ['onions', 'carrots', 'celery', 'garlic', 'potatoes'];
console.log(1, items);
items.push('squash');
console.log(2, items);
items.splice(2, 1);
console.log(3, items);
let itemsAsString = items.join(',');
console.log(4, itemsAsString);
