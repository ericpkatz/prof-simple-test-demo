const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/my_db');

const Foo = conn.define('foo', {
  name: {
    type: Sequelize.STRING,
  }
});

const sync = ()=> {
  return conn.sync({ force: true });
};

const seed = ()=> {
  return Promise.all([
    Foo.create({ name: 'bar' }), 
    Foo.create({ name: 'bazz' })
  ])
  .then( foos => {
    return {
      foos
    };
  });
};

module.exports = {
  sync,
  seed,
  models: {
    Foo
  }
};
