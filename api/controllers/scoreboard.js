const ScoreboardSchema = require("../models/scoreboard");
// const ObjectId = require("mongoose").Types.ObjectId;

module.exports.CREATE_SCOREBOARD = function (req, res) {
  const scoreboard = new ScoreboardSchema({
    name: req.body.name,
    dateCreated: new Date(),
    results_ids: [],
    scoreDirection: req.body.scoreDirection,
  });

  scoreboard.save().then(() => {
    return res
      .status(200)
      .json({ response: "Scoreboard was created succesfully" });
  });
};

module.exports.EDIT_NAME = (req, res) => {
  ScoreboardSchema.updateOne(
    { _id: req.params.id },
    { name: req.body.editedName }
  ).then((result) => {
    return res
      .status(200)
      .json({ statusMessage: "Name edited successfully", editedName: result });
  });
};

module.exports.EDIT_DIRECTION = (req, res) => {
  ScoreboardSchema.update({ scoreDirection: req.body.sorted }).then(
    (result) => {
      // if ("ASC") {
      //   scoreDirection.sort() - 1;
      // } else {
      //   scoreDirection.sort();
      // }
      return res.status(200).json({
        statusMessage: "Direction has been changed successfully",
        sorted: result,
      });
    }
  );
};

module.exports.GET_SCOREBOARDS = function (req, res) {
  ScoreboardSchema.find()
    .sort("scoreboard")
    .then((results) => {
      return res.status(200).json({ scoreboard: results });
    });
};

module.exports.GET_SCOREBOARD_BY_ID = function (req, res) {
  ScoreboardSchema.findOne({ _id: req.params.id }).then((results) => {
    return res.status(200).json({ scoreboard: results });
  });
};
