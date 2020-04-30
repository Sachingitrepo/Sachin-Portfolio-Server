const express = require("express");

const app = express();
app.use(express.json());
const contactRouter = require("./routes/contact");
app.use(contactRouter);
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("port is listening on " + port);
});
