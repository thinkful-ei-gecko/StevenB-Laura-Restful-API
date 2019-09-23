'use strict';

// eslint-disable-next-line no-unused-vars
const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/StevenBull';

  const listApiFetch = function(...args) {
    let error;
    return fetch(...args).then(res => {
      if(!res.ok) { error = {code: res.status};
        if(!res.headers.get('content-type').includes('json')){
          error.message = res.statusText;
          return Promise.reject(error);
        }
      }
      return res.json();
    })
      .then(data => {
        if(error){
          error.message = data.message;
          return Promise.reject(error);
        }
        return data;
      });
  };

  const getItems = function(){
    return listApiFetch(BASE_URL + '/items');
  };

  const createItem = function(name) {
    const newItem = JSON.stringify({ name });
    const createInfo = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: newItem
    };   
    return listApiFetch(BASE_URL + '/items', createInfo);
  };

  const updateItem = function(id, updateData) {
    const newUpdateData = JSON.stringify(updateData);
    const updateInfo = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: newUpdateData
    };
    return listApiFetch(BASE_URL + '/items/' + id, updateInfo);
  };

  const deleteItem = function(id) {
    return listApiFetch(BASE_URL + '/items/' + id, { method: 'DELETE'});
  };

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
}());