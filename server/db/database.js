const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'nodejs_beers',
});

let beerdb = {};

beerdb.getAll = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * from beers', (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

beerdb.getOne = id => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * from beers WHERE id = ?', [id], (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

beerdb.create = data => {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO beers SET ?', data, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

beerdb.update = (id, ...data) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'UPDATE beers SET name = ?, tagline = ?, description = ?, image = ? WHERE id = ?',
      [...data, id],
      (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      }
    );
  });
};

beerdb.delete = id => {
  return new Promise((resolve, reject) => {
    pool.query('DELETE FROM beers WHERE id = ?', id, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    });
  });
};

module.exports = beerdb;
