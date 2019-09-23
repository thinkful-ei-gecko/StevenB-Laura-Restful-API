'use strict';

/* global shoppingList, store, api, $ */

$(document).ready(function() {
  shoppingList.bindEventListeners();

  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => alert(err.message));
});




/* api.getItems()
  .then(res => res.json())
  .then((items) => {
    const item = items[0];
    return api.updateItem(item.id, { name: 'foobar', checked: true });
  })
  .then(res => res.json())
  .then(() => console.log('updated!'));  */

//store.items.push(Item.create('apples')); 

/* api.getItems()
  .then(res => res.json())
  .then(data => console.log(data)); */

/* api.createItem('pears')
  .then(res => res.json())
  .then((newItem) => {
    return api.getItems();
  })
  .then(res => res.json())
  .then((items) => {
    console.log(items);
  });  */