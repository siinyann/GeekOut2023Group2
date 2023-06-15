const express = require("express");
const router = express.Router();
const flashMessage = require("../helpers/messenger");

router.get("/login", (req, res) => {
  res.render("user/login");
});

router.get("/register", (req, res) => {
  res.render("user/register");
});

router.get("/profile", (req, res) => {
  const user = "group2@gmail.com"
  res.render("user/profile", { user });
});

router.post("/register", function (req, res) {
  let { name, email, password, password2 } = req.body;
  let isValid = true;
  if (password.length < 8) {
    flashMessage(res, "error", "Password must be at least 8 characters");
    isValid = false;
  }
  if (password != password2) {
    flashMessage(res, "error", "Passwords do not match");
    isValid = false;
  }
  if (!isValid) {
    res.render("user/register", {
      name,
      email,
    });
    return;
  }
  flashMessage(res, "success", email + " registered successfully");
  res.redirect("/user/login");
});

router.post("/login", (req, res, next) => {
  
  let { email, password } = req.body;
  let user = "group2@gmail.com"
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

router.get('/logout', function (req, res, next) {
    res.redirect('/user/login')
})

module.exports = router;
