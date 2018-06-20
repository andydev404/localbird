## LocalBird

Promise based localstorage

## Installing

```html
<script src="localbird.js"></script>
```

### Example

---

`POST`

```javascript
const bird = new localbird();

/**
 * @param   {String} key
 * @param   {String, Number, Array, Object} data
 * @return  {Object}
 * @desc    Storage in LocalStorage
 */
bird.post(key, data).then(data => console.log(data));
```

---

`GET`

```javascript
/**
 * @param   {String} key
 * @return  {Object}
 * @desc    Get from LocalStorage
 */
bird.get(key).then(data => console.log(data));
```

---

`DELETE`

```javascript
/**
 * @param   {String} key
 * @return  {Object}
 * @desc    Delete from Localstorage
 */
bird.delete(key).then(data => console.log(data));
```

---

`DELETE a property from an object or array`

```javascript
/**
 * @param   {String} key
 * @param   {String} property
 * @return  {Object}
 * @desc    Delete a property from Localstorage Item
 */
bird.deleteProperty(key, property).then(data => console.log(data));
```

---

`DELETE ALL`

```javascript
/**
 * @return  {Object}
 * @desc    Delete all from Localstorage
 */
bird.deleteAll().then(data => console.log(data));
```

## Request method

**bird.post(key, data)**

**bird.get(key)**

**bird.delete(key)**

**bird.deleteProperty(key,property)**

**bird.deleteAll()**
