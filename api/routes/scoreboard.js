const express = require("express");
const router = express.Router();
const {
  CREATE_SCOREBOARD,
  EDIT_NAME,
  EDIT_DIRECTION,
  GET_SCOREBOARDS,
  GET_SCOREBOARD_BY_ID,
} = require("../controllers/scoreboard");

router.post("/createScoreboard", CREATE_SCOREBOARD);
router.put("/editScoreboardName/:id", EDIT_NAME);
router.put("/editScoreboardDirection", EDIT_DIRECTION);
router.get("/getAllScoreboards", GET_SCOREBOARDS);
router.get("/getScoreboardById/:id", GET_SCOREBOARD_BY_ID);

module.exports = router;
