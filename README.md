# Array pagination

Simple pagination for arrays in javascript
## Installation
```js
npm install paginate-array
```

## Usage

```js

const paginate = require("paginate-array");
const collection = [...];

const paginateCollection = paginate(collection[,pageNumber, NumItemsPerPage]);

console.log(paginateCollection);
{
    currentPage: 1,
    perPage: 10,
    total: 20,
    totaPages: 2,
    data: [...]
}
```
