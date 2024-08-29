const express = require("express");

const { createData, getData } = require("../controller/uploadController");
const router = express.Router();

router.route("/add").post(createData);
router.route("/data").get(getData);

module.exports = router;
