const express = require("express"),
 router = express.Router(),
 bcrypt = require("bcryptjs"),
 jwt = require("jsonwebtoken"),
 mw = require("../../middleware")

//@route    POST api/user
//@desc     Create a new game
//@access   public
router.post("/createNewGame",[mw.auth.authenticate], async (req, res) => {
  try {
    
    const requestData = req.body;
    
    //Insert new user to the table and store the newUser in a variable
    const newUser = await mw.db.addNewGame(req.body,req.user);

  
    return res.status(200).json({
      message: "Registered & logged in"
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route    GET api/game/currentGame
//@desc     Get the details of an existing user
//@access   private
router.get("/getcurrentGame", [mw.auth.authenticate], async (req,res) => {
  try {

     //Insert new user to the table and store the newUser in a variable
     const current_game = await mw.db.getGames();

    res.status(200).json({
      message: "Success",
      payload: {
        current_game: current_game
      }
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
