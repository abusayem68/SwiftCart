const express = require("express");
const router = require("./src/routes/api");
const app = express();

const helmet = require("helmet");
const cors = require("cors");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const { rateLimit } = require("express-rate-limit");
const { dbConnection } = require("./src/configuration/config");

app.use(helmet());
app.use(cors());
app.use(hpp());
app.use(mongoSanitize());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// request rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7",
  legacyHeaders: false,
});
app.use(limiter);

// Database connection
dbConnection();

app.use("/api/v1", router);

module.exports = app;
