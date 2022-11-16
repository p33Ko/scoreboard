const express = require("express");
const router = express.Router();
const {
  CREATE_SCORE,
  EDIT_TITLE,
  GET_ALL_RESULTS,
  GET_RESULTS_BY_ID,
} = require("../controllers/results");

router.post("/createScore/", CREATE_SCORE);

router.put("/editTitle/:id", EDIT_TITLE);

router.get("/getAllResults", GET_ALL_RESULTS);

router.get("/getAllResultsByScoreboardId:id", GET_RESULTS_BY_ID);

module.exports = router;
