const express = require("express");
const app = express();
const api = require("./routes/api");
const cors = require("cors");
app.use(cors());
app.use("/app", api);
app.listen(8000, () => {});
