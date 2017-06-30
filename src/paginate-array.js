export default (collection, page = 1, numItems = 10) => {
  if( !Array.isArray(collection) ) {
    throw `Expect array and got ${typeof collection}`;
  }
  const currentPage = parseInt(page);
  const perPage = parseInt(numItems);
  const offset = (page - 1) * perPage;
  const paginatedItems = collection.slice(offset, offset + perPage);

  return {
    currentPage,
    perPage,
    total: collection.length,
    totalPages: Math.ceil(collection.length / perPage),
    data: paginatedItems
  };
}
