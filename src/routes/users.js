const router = require('express').Router();
const { users } = require('../controllers');

// GET localhost:4000/users => Get All user datas
router.get('/users', users.getAll);

// GET localhost:4000/users/get/2 => get user data based on Userid
router.get('/users/get/:id', users.getUserById);

router.get('/form', function (req, res, next) {
  res.render('users');
});

// POST localhost:4000/users/create => create user data
router.post('/users/create', users.create,  function (req, res, next) {
  res.redirect('/users/form');
});


module.exports = router;