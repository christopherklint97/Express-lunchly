/** Start server for Lunchly. */

const app = require("./app");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("listening on 3000");
});
