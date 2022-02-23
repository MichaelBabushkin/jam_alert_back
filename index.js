const express = require("express");
const app = express();
const cors = require("cors");
const dbConfig = require("./config/db.config");
const db = require("./models");
const path = require("path");
var dotenv = require('dotenv');
dotenv.config();


var corsOptions = {
    origin: "https://jam-alert.herokuapp.com"
  };
  
  app.use(cors(corsOptions));
  
  // parse requests of content-type - application/json
  app.use(express.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
  
  
  db.mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    // initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
  
  // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Just an empty backend.. you have nothing to get here3" });
  });
  
  // routes
  // const authRoutes = require("./routes/auth.routes");
  // const authRoutes2 = require(path.join(__dirname, './routes/auth.routes'));
  require(path.join(__dirname, './routes/auth.routes'))(app);
require(path.join(__dirname, './routes/user.routes'))(app);
  // require("./routes/user.routes")(app);
  
  // set port, listen for requests
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  });
  
const Role = db.role;
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
