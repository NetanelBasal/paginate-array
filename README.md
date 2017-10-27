[![Build Status](https://semaphoreci.com/api/v1/netanel7799/paginate-array/branches/master/badge.svg)](https://semaphoreci.com/netanel7799/paginate-array)

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

const paginateCollection = paginate(collection[,pageNumber, numItemsPerPage]);

console.log(paginateCollection)

{
    currentPage: 1,
    perPage: 10,
    total: 20,
    totalPages: 2,
    data: [...]
}
```
