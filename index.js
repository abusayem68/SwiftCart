const app = require("./app");
require("dotenv").config();

// eslint-disable-next-line no-undef
const PORT = process.env.APP_RUNNING_PORT || 9000;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
