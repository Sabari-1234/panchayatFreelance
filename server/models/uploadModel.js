const mongoose = require("mongoose");
const UploadSchema = new mongoose.Schema({
  applicantName: String,
  applicantID: String,
  street: String,
  streetType: String,
  streetLength: String,
  streetWidth: String,
  passageLength: String,
  passageWidth: String,
  boundaryNorth: String,
  boundarySouth: String,
  boundaryEast: String,
  boundaryWest: String,
  image: String,
  location: Object,
});

const uploadModel = mongoose.model("Upload", UploadSchema);
module.exports = uploadModel;
