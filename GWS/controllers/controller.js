const {
  Item,
  Category,
  Payment,
  User,
  UserDetail,
  Vehicle,
} = require("../models");
const bcrypt = require("bcryptjs");

class Controller {
  static home(req, res) {
    res.render("home", { err: req.query.error });
  }

  static signUpForm(req, res) {
    res.render("signupform");
  }

  static postSignUp(req, res) {
    const { firstName, lastName, email, password, role } = req.body;
    User.create({ firstName, lastName, email, password, role })
      .then((user) => {
        req.session.cosId = user.id;
        if (user.role === "costumer") res.render("costumerform");
        else if (user.role === "driver") res.render("driverform");
        else res.redirect("/signin");
      })
      .catch((err) => res.send(err));
  }

  static postCostumer(req, res) {
    const { phoneNumber, birthDate } = req.body;
    UserDetail.create({ phoneNumber, birthDate, UserId: req.session.cosId })
      .then(() => res.redirect("/"))
      .catch((err) => res.send(err));
  }

  static postDriver(req, res) {
    const { phoneNumber, birthDate } = req.body;
    UserDetail.create({
      phoneNumber,
      birthDate,
      UserId: req.params.id,
      type: req.params.type,
    })
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => res.send(err));
  }

  static signInForm(req, res) {
    let { err } = req.query;
    res.render("signinform", { err });
  }

  static postSignIn(req, res) {
    const { email, password } = req.body;
    User.findOne({ where: { email } })
      .then((user) => {
        const isPassValid = bcrypt.compareSync(password, user.password);
        if (user && isPassValid) {
          req.session.userId = user.id;
          return res.redirect("/");
        } else {
          let error = "*Couldn't find your account";
          return res.redirect(`/signin?err=${error}`);
        }
      })
      .catch((err) => res.send(err));
  }

  static signOut(req, res) {
    req.session.destroy((err) => {
      err ? res.send(err) : res.redirect("/");
    });
  }

  static gwsRide(req, res) {
    res.render("gwsRide");
  }

  static gwsFood(req, res) {
    res.render("gwsfood");
  }
}
module.exports = Controller;
