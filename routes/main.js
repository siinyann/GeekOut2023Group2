const express = require('express');
const router = express.Router();
const flashMessage = require('../helpers/messenger');

router.get('/', (req, res) => {
	// renders views/index.handlebars, passing title as an object
	res.render('index')
});

router.get('/loggedin', (req, res) => {
	// renders views/index.handlebars, passing title as an object
	let user = "group2@gmail.com";
	res.render('index', { user })
});

router.get('/rewards', (req, res) => {
	let user = "group2@gmail.com";
	res.render('rewards', { user })
});


router.get('/rewardsredeemed', (req, res) => {
	let user = "group2@gmail.com";
	res.render('rewardsredeemed', { user })
});

router.get('/self', (req, res) => {
	res.render('self')
});

router.get('/selflogin', (req, res) => {
	let user = "group2@gmail.com";
	res.render('self', { user })
});

router.post('/flash', (req, res) => {
	const message = 'This is an important message';
	const error = 'This is an error message';
	const error2 = 'This is the second error message';

	// req.flash('message', message);
	// req.flash('error', error);
	// req.flash('error', error2);

	flashMessage(res, 'success', message);
	flashMessage(res, 'info', message);
	flashMessage(res, 'error', error);
	flashMessage(res, 'error', error2, 'fas fa-sign-in-alt', true);

	res.redirect('/about');
});

module.exports = router;
