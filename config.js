require('dotenv').config()

const config = {
  "development": {
    "uri": process.env.DATABASE_URI,
  },
  "test": {
    "uri": process.env.DATABASE_URI,
  },
  "production": {
    "uri": process.env.DATABASE_URI,
  }
}

module.exports = config;
