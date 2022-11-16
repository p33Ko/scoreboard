const ScoreboardSchema = require("../models/scoreboard");
const ResultsSchema = require("../models/scoreboardResults");

module.exports.CREATE_SCORE = function (req, res) {
  const score = new ResultsSchema({
    title: req.body.title,
    points: req.body.points,
  });

  score.save().then((result) => {
    console.log(result._id);

    ResultsSchema.updateOne({ _id: result._id }, { id: result._id }).exec();

    ScoreboardSchema.updateOne(
      { _id: req.body.scoreboard_id },
      { $push: { results_ids: result._id.toString() } }
    ).exec();

    return res.status(200).json({
      statusMessage: "Score was created successfully",
      result: result,
    });
  });
};

module.exports.EDIT_TITLE = (req, res) => {
  ResultsSchema.updateOne(
    { _id: req.params.id },
    { title: req.body.editedTitle }
  ).then((result) => {
    return res.status(200).json({
      statusMessage: "Title name was successfully updated",
      editedTitle: result,
    });
  });
};

module.exports.GET_ALL_RESULTS = function (req, res) {
  ResultsSchema.find()
    .sort("task")
    .then((results) => {
      return res.status(200).json({ result: results });
    });
};

module.exports.GET_RESULTS_BY_ID = function (req, res) {
  ResultsSchema.find({ _id: req.params.id }).then((results) => {
    return res.status(200).json({ result: results });
  });
};
