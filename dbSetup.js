var mongoose = require("mongoose");
let dbURI =
  "mongodb+srv://stein:xdxdxdxd@skoleprojekt-azi7o.mongodb.net/geo?retryWrites=true  ";

function setDbUri(uri) {
  dbURI = uri;
}

function connect() {
  return mongoose.connect(dbURI, { useNewUrlParser: true });
}

mongoose.connection.on("connected", function() {
  console.log("Mongoose default connection open to " + dbURI);
});

// If the connection throws an error
mongoose.connection.on("error", function(err) {
  console.log("Mongoose default connection error: " + err);
});

module.exports = {
  setDbUri: setDbUri,
  connect: connect
};
