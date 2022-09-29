module.exports = {
  database: { url: "mongodb://localhost:27017/booking_system" },
  jwt: {
    secret: "secret",
    expiresIn: 3600,
  },
};
