const express = require("express");
const Controller = require("../controllers/controller");
const router = express.Router();

router.get("/", Controller.home);
router.get("/signup", Controller.signUpForm);
router.post("/signup", Controller.postSignUp);
router.get("/signin", Controller.signInForm);
router.post("/signin", Controller.postSignIn);
// router.get("/signin/costumer", Controller.costumerForm);
router.post("/signup/costumer", Controller.postCostumer);
// router.get("/signin/driver", Controller.driverForm);
router.post("/signup/driver", Controller.postDriver);
router.get("/signout", Controller.signOut);
router.use((req, res, next) => {
  if (!req.session.userId) {
    const err = "*Please sign in first";
    res.redirect(`/?error=${err}`);
  } else next();
});
router.get("/gwsride", Controller.gwsRide);
router.get("/gwsfood", Controller.gwsFood);

// router.get("/listofuser", Controller.postSignIn);
// router.get("/listofuser/detail/:id", Controller.postSignIn);

module.exports = router;
