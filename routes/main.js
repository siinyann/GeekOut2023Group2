const express = require('express');
const router = express.Router();
const flashMessage = require('../helpers/messenger');
const user = "group2@gmail.com";


router.get('/', (req, res) => {
	res.render("user/login");
});

router.post("/", (req, res, next) => {
  
	let { email, password } = req.body;
	const user = "group2@gmail.com"
	let isValid = true;
  
	if (password.length < 8) {
	  flashMessage(res, "error", "Password must be at least 8 characters");
	  isValid = false;
	}
	if ((password != 'Group2.1356' && email != "group2@gmail.com") || password != 'Group2.1356') {
	  flashMessage(res, "error", "Invalid password or email address");
	  isValid = false;
	}
	if (!isValid) {
	  res.render("user/login", {
		email
	  });
	  return;
	}
	flashMessage(res, "success", email + " login successfully");
	res.render('index', { user });
  });

router.get('/dashboard', (req, res) => {
	const user = "group2@gmail.com";
	res.render('index', { user })
});

router.get('/rewards', (req, res) => {
	const user = "group2@gmail.com";
	res.render('rewards', { user })
});

router.get('/rewardsredeemed', (req, res) => {
	const user = "group2@gmail.com";
	res.render('rewardsredeemed', { user })
});

router.get('/self', (req, res) => {
	res.render('self')
});

router.get('/selflogin', (req, res) => {
	const user = "group2@gmail.com";
	res.render('self', { user })
});

router.post('/flash', (req, res) => {
	const message = 'This is an important message';
	const error = 'This is an error message';
	const error2 = 'This is the second error message';

	flashMessage(res, 'success', message);
	flashMessage(res, 'info', message);
	flashMessage(res, 'error', error);
	flashMessage(res, 'error', error2, 'fas fa-sign-in-alt', true);

	res.redirect('/about');
});

module.exports = router;
