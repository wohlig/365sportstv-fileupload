require("dotenv").config();
require("./config/global.js");
require("./controller/controller.js");

global.port = process.env["PORT"];

app.listen(port, () => {
  console.log(`Multer File Upload Server Started at Port ${port}`);
});
