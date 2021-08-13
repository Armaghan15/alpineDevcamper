const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");

// Load env variables
dotenv.config({ path: "./config/config.env" });

// Connect to Databse
connectDB();

// Route Files
const bootcamps = require("./routes/bootcampsRoutes");

const app = express();

const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};

// Dev Logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount Routers
app.use("/api/v1/bootcamps", bootcamps);

// Defining the port on which our app will run on
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode, on PORT ${PORT}`.cyan.bold
      .underline
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  // Close server and exit process
  server.close(() => {
    process.exit(1);
  });
});
