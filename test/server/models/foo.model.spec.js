const db = require('../../../db');
const { expect }  = require('chai');

describe('Foo', ()=> {
  let seeded;
  beforeEach(()=> {
    return db.sync()
      .then(()=> db.seed())
      .then( _seeded => seeded= _seeded);
  });
  describe('seeded data', ()=> {
    it('has a bar and bazz', ()=> {
      expect(seeded.foos.find( f => f.name === 'bar').name).to.equal('bar');
      expect(seeded.foos.find( f => f.name === 'bazz').name).to.equal('bazz');
    });
  });
});
