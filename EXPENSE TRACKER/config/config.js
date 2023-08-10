const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: "mongodb://127.0.0.1:27017/mernprojects",
};

export default config;
// mongodb://localhost:27017/mernproject
