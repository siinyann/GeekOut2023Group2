const express = require("express");
const router = express.Router();
const flashMessage = require("../helpers/messenger");

router.get("/login", (req, res) => {
  res.render("user/login");
});

router.get("/register", (req, res) => {
  res.render("user/register");
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
  // passport.authenticate("local", {
  //   // Success redirect URL
  //   successRedirect: "/video/listVideos",
  //   // Failure redirect URL
  //   failureRedirect: "/user/login",
  //   /* Setting the failureFlash option to true instructs Passport to flash 
  // an error message using the message given by the strategy's verify callback.
  // When a failure occur passport passes the message object as error */
  //   failureFlash: true,
  // })(req, res, next);

  let { email, password } = req.body;
  let user = "sinyanchong4@gmail.com"
  let isValid = true;

  if (password.length < 8) {
    flashMessage(res, "error", "Password must be at least 8 characters");
    isValid = false;
  }
  if ((password != 'Csy.2003' && email != "sinyanchong4@gmail.com") || password != 'Csy.2003') {
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
  req.logout(function (err) {
    if (err) {
      return next(err)
    }
    res.redirect('/')
  })
})

module.exports = router;
