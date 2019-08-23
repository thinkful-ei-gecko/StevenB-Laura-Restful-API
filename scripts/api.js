'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/StevenBull';

  const getItems = function() {
    return fetch(`${BASE_URL}/items`);
  };

  const createItem = function(name) {
    const newItem = JSON.stringify({
      name
    });
      
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: newItem
    });
  };

  const updateItem = function(id, updateData) {
    const newUpdateData = JSON.stringify(updateData);
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: newUpdateData
    });

  };

  return {
    getItems,
    createItem,
    updateItem
  };

}());