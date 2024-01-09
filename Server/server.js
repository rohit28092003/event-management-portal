const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
const loginRouter = require("./Routes/auth.login.js");
app.use("/auth", loginRouter);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
