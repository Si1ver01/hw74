const express = require("express");
const messages = require("./routes/messages.route");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/messages", messages);

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
});
