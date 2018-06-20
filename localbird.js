'use strict';

function localbird() {}

/**
 * @param   {String} key
 * @param   {String} data
 * @return  {Object}
 * @desc    Storage in LocalStorage
 */
localbird.prototype.post = (key, data) => {
  return new Promise((resolve, reject) => {
    if (!key || !data) {
      reject('Expecting 2 arguments');
    }
    localStorage.setItem(key, JSON.stringify(data))
    resolve(data)
  })
}

/**
 * @param   {String} key
 * @return  {Object}
 * @desc    Get from LocalStorage
 */
localbird.prototype.get = (key) => {
  return new Promise((resolve, reject) => {
    if (!key) {
      reject('Expecting 1 arguments');
    }
    let parseData = JSON.parse(localStorage.getItem(key.toString()))
    resolve(parseData)
  })
}

/**
 * @param   {String} key
 * @return  {Object}
 * @desc    Delete from Localstorage
 */
localbird.prototype.delete = (key) => {
  return new Promise((resolve, reject) => {
    if (!key) {
      reject('Expecting 1 arguments');
    }
    localStorage.removeItem(key);
    resolve({
      message: key + ' Deleted'
    })
  })
}

/**
 * @param   {String} key
 * @param   {String} property
 * @return  {Object}
 * @desc    Delete a property from Localstorage Item
 */
localbird.prototype.deleteProperty = (key, property) => {
  return new Promise((resolve, reject) => {
    if (!key || !property) {
      reject('Expecting 2 arguments. The key and property name');
    }

    let item = JSON.parse(localStorage.getItem(key));

    if (typeof item === 'object') {
      if (item && item.length) {
        if (item.indexOf(property) !== -1) {
          item.splice(item.indexOf(property), 1);
        } else {
          resolve({
            message: 'The property does not exist'
          })
        }
      } else {
        if (Object.values(item).indexOf(property) !== -1) {
          delete item.property;
        } else {
          resolve({
            message: 'The property does not exist'
          })
        }
      }
    }
    localbird.prototype.post(key, item);
    resolve({
      message: property + ' have been deleted'
    })
  })
}

/**
 * @return  {Object}
 * @desc    Delete all from Localstorage
 */
localbird.prototype.deleteAll = () => {
  return new Promise((resolve, reject) => {
    localStorage.clear();
    resolve({
      message: 'Localstorage empty'
    })
  })
}