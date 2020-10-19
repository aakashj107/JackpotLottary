require("dotenv").config();
const express = require("express"),
 router = express.Router(),
 bcrypt = require("bcryptjs"),
 mw = require("../../config/middleware"),
 util = require("../../config/util");

//@route    POST api/user
//@desc     Create a new user
//@access   public
router.post("/", async (req, res) => {
  try {
    const { first_name, middle_name, last_name, login_id, password, bio } = req.body;

    //Check and notify if user already exists
    const existingUser = await util.getUserByLoginId(login_id);

    if (existingUser) {
      return res.status(409).json({
        message: "Login id already in use",
      });
    }

    //Encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);

    //Insert new user to the table and store the newUser in a variable
    const newUser = await util.addNewUser(first_name, middle_name, last_name, login_id, hashed_password, bio);

    return res.status(200).json({
      message: "Registered",
      payload: newUser
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route    GET api/user/me
//@desc     Get the details of an existing user
//@access   private
router.get("/me", [mw.authenticate], async (req,res) => {
  try {
    res.status(200).json({
      message: "Success",
      payload: req.user
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route    PUT api/user/:id
//@desc     Update the details of an existing user
//@access   private

//@route    DELETE api/user/:id
//@desc     Delete an existing user
//@access   private

//Export router
module.exports = router;