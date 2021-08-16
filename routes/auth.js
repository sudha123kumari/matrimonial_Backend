const express = require("express");
const router = express.Router();

const {
  otpSend,
  otpVerify,
  Register,
  generalInfo,
  educationalInfo,
  personalInfo,
  deleteUser,
} = require("../controllers/auth");

router.post("/otpSend", otpSend);
// router.post("/otpVerify", otpVerify);
router.post("/register", Register);
router.post("/generalInfo", generalInfo);
router.post("/educationalInfo", educationalInfo);
router.post("/personalInfo", personalInfo);
router.post("/deleteUser", deleteUser);

module.exports = router;
