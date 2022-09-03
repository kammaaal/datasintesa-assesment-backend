const config = require('../configs/db');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
  console.error(err);
});

module.exports = {
  // Get All Users data
  getAll(req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                SELECT * FROM users;
                `
        , function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: 'Success',
            data: results
          });
        });
      connection.release();
    })
  },
  // get user by ID
  getUserById(req, res) {
    let id = req.params.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                SELECT * FROM users WHERE Userid = ?;
                `
        , [id],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: 'Success',
            data: results
          });
        });
      connection.release();
    })
  },
  // create new user
  create(req, res) {
    let data = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      status: 1
    }
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
                INSERT INTO users SET ?;
                `
        , [data],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: 'New user successfully created',
          });
        });
      connection.release();
    })
  }
}