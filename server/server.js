const express = require("express");
const app = express();
const otpservice = require("./controller/otp");
const userapis = require("./controller/users");

app.use("/api/otp", otpservice);
app.use("/api/user", userapis);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running at ${port}`));