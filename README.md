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

The result of paginateCollection will be an object:

{
    currentPage: 1,
    perPage: 10,
    total: 20,
    totaPages: 2,
    data: [...]
}
```
