const express = require("express");
const router = express.Router();

const {
  updatePassword,
  verifyAccount,
  updateProfile,
} = require("../controllers/update");

router.post("/updatePassword", updatePassword);
router.post("/verifyAccount", verifyAccount);
router.post("/updateProfile", updateProfile);

module.exports = router;
