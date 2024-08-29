const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

dotenv.config({ path: path.join(__dirname, "config", ".env") });

const connectDatabase = require("./config/connectDB");

app.use(cors());
app.use(express.json());

const upload = require("./router/upload");
app.use("/upload/api/", upload);
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is listening on ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});

//mongodb+srv://PR:Pattu%402002@panchayatdb.a89xl.mongodb.net/panchayat?retryWrites=true&w=majority&appName=PanchayatDB
