import config from "./../config/config";
import app from "./express";
import mongoose from "mongoose";

// Connection URL
mongoose.Promise = global.Promise;
try {
  const connectDB = mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB Connected !!");
} catch (err) {
  console.error(err.message);
  // Exit process
  process.exit(1);
}

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
