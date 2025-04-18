const express = require("express");

const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  Signup,
  Signin,
  ForgotPassword,
  ResetPassword,
  UpdatePassword,
  UpdateMyAccount,
  DeleteMyAccount,
} = require("../controllers/userController");
const { upload } = require("../middleware/uploadMiddleware");

router
  .post("/signup", Signup)
  .post("/signin", Signin)
  .post("/forgot-password", ForgotPassword);
router.patch("/reset-password", ResetPassword);
router.patch("/update-password", protect, UpdatePassword);
// router.patch("/update-me", protect, UpdateMyAccount);
router.patch("/update-me", protect, upload.single("photo"), UpdateMyAccount);
router.delete("/delete-me", protect, DeleteMyAccount);

module.exports = router;
