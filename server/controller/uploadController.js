const uploadModel = require("../models/uploadModel");

exports.getData = async (req, res, next) => {
  try {
    const data = await uploadModel.find({});
    res.status(200).send(data);
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "No data found",
    });
  }
};

exports.createData = async (req, res, next) => {
  try {
    const data = await uploadModel.create(req.body);
    res.json({
      success: true,
      message: "Data created successfully",
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Unable to create the task",
    });
  }
};
