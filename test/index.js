import { expect } from 'chai';
import paginateArray from '../src/paginate-array';

describe('Paginate array', () => {

  let collection;

  beforeEach(() => {
    // generate array
    collection = Array.apply(null, Array(20)).map((_, i) => ({id: i}));
  })

  describe('By default', () => {
    it('should return 10 items', () => {
      const paginate = paginateArray(collection);
      expect(paginate.data.length).to.equal(10);
    });

    it('should return page 1', () => {
      const paginate = paginateArray(collection);
      expect(paginate.currentPage).to.equal(1);
    });

    it('should throw if not array', () => {
      expect(paginateArray.bind(null, 'string')).to.throw(/Expect array and got string/);
    });

    it('should retrun the correct values', () => {
      const paginate = paginateArray(collection);
      expect(paginate.currentPage).to.equal(1);
      expect(paginate.perPage).to.equal(10);
      expect(paginate.total).to.equal(20);
      expect(paginate.totaPages).to.equal(2);
      expect(paginate.data).to.eql(collection.slice(0, 10));
    });
  });

  it('should return 15 items', () => {
    const paginate = paginateArray(collection, 1, 15);
    expect(paginate.data.length).to.equal(15);
  });

  it('should return the next 2 items', () => {
    const paginate = paginateArray(collection, 2, 2);
    expect(paginate.data[0].id).to.equal(2);
    expect(paginate.data[1].id).to.equal(3);
  });


});
