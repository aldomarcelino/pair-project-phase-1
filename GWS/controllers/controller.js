const {
  Item,
  Category,
  Payment,
  User,
  UserDetail,
  Vehicle,
} = require("../models");
const bcrypt = require("bcryptjs");
const { ridePayment, randomIt } = require("../helper/gettotalamount");

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
        req.session.type = user.role;
        if (user.role === "costumer") res.render("costumerform");
        else if (user.role === "driver") res.render("driverform");
        else res.redirect("/signin");
      })
      .catch((err) => res.send(err));
  }

  static postCostumer(req, res) {
    const { phoneNumber, birthDate } = req.body;
    UserDetail.create({
      phoneNumber,
      birthDate,
      UserId: req.session.cosId,
      type: req.session.type,
    })
      .then(() => res.redirect("/"))
      .catch((err) => res.send(err));
  }

  static postDriver(req, res) {
    const { phoneNumber, birthDate, vType, policeNum, lisence } = req.body;
    UserDetail.create({
      phoneNumber,
      birthDate,
      lisence,
      UserId: req.session.cosId,
      type: req.session.type,
    })
      .then((data) => {
        return Vehicle.create({
          UserDetailId: data.id,
          type: vType,
          policeNum,
        });
      })
      .then(() => res.redirect("/"))
      .catch((err) => res.send(err));
  }

  static signInForm(req, res) {
    let { err } = req.query;
    res.render("signinform", { err });
  }

  static postSignIn(req, res) {
    const { email, password } = req.body;
    User.findOne({ where: { email: email } })
      .then((user) => {
        if (user) {
          const isPassValid = bcrypt.compareSync(password, user.password);
          if (isPassValid) {
            req.session.userId = user.id;
            return res.redirect("/");
          }
        } else {
          let error = "*Couldn't find your account";
          return res.redirect(`/signin?err=${error}`);
        }
      })
      .catch((err) => res.send("err"));
  }

  static signOut(req, res) {
    req.session.destroy((err) => {
      err ? res.send(err) : res.redirect("/");
    });
  }

  static gwsRide(req, res) {
    res.render("gwsRide");
  }

  static postGwsRide(req, res) {
    const { pickUpFrom, drop, rideType } = req.body;
    UserDetail.update(
      { pickUpFrom, drop, rideType },
      { where: { UserId: req.session.userId } }
    )
      .then(() => {
        return Item.create({ name: "gwsRide", CategoryId: 1 });
      })
      .then((item) => {
        req.session.itemId = item.id;
        return Vehicle.findAll({
          where: { type: rideType },
          attributes: ["id"],
        });
      })
      .then((data) => {
        return Vehicle.findByPk(randomIt(data));
      })
      .then((data) => {
        let amount = ridePayment(data.basePrice);
        return Payment.create({
          amount,
          UserDetailId: data.UserDetailId,
          ItemId: req.session.itemId,
        });
      })
      .then((data) => {
        return Payment.findByPk(data.id, {
          include: [
            {
              model: UserDetail,
              include: User,
            },
            Item,
          ],
        });
      })
      .then((data) => res.send(data))
      // .then((data) => res.render("succes", { data }))
      .catch((err) => res.send(err));
  }

  static gwsFood(req, res) {
    Category.findOne({ where: { name: "food" } })
      .then((data) => {
        return Item.findAll({ where: { CategoryId: data.id } });
      })
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  }

  static showAllItem(req, res) {
    Item.findAll({ include: Category })
      .then((data) => res.send(data))
      // .then(data => res.render("listofitem"))
      .catch((err) => res.send(err));
  }

  static addNewItem(req, res) {}

  static postNewItem(req, res) {}

  static editTheItem(req, res) {}

  static postEditedItem(req, res) {}

  static showAllUser(req, res) {
    User.findAll({ include: UserDetail })
      .then((data) => res.send(data))
      // .then(data => res.render("listofitem"))
      .catch((err) => res.send(err));
  }

  static editTheUser(req, res) {}

  static postEditedUser(req, res) {}
}
module.exports = Controller;
