const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/", Controller.home);
router.get("/signup", Controller.signUpForm);
router.post("/signup", Controller.postSignUp);
router.get("/signin", Controller.signInForm);
router.post("/signin", Controller.postSignIn);
router.post("/signup/costumer", Controller.postCostumer);
router.post("/signup/driver", Controller.postDriver);
router.get("/signout", Controller.signOut);
router.use((req, res, next) => {
  if (!req.session.userId) {
    const err = "*Please sign in first";
    res.redirect(`/?error=${err}`);
  } else next();
});
router.get("/gwsride", Controller.gwsRide);
router.post("/gwsride", Controller.postGwsRide);
router.get("/gwsfood", Controller.gwsFood);

router.use((req, res, next) => {
  if (!req.session.adminId) {
    const err = "*Access not allowed";
    res.redirect(`/?error=${err}`);
  } else next();
});

router.get("/listofitem", Controller.showAllItem);
router.get("/listofuser", Controller.showAllUser);
router.get("/listofitem/:id/delete", Controller.deleteItem);
router.get("/listofuser/:id/delete", Controller.deleteUser);


module.exports = router;
