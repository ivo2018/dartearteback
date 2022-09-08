import express from "express";
import cors from "cors";
import db from "./database/db.js";
import Routes1 from "./routes/routes.js";
import Routes2 from "./routes/admin/routesDestacados.js";
import Routes3 from "./routes/admin/routesProductos.js";
import routerAdmin from "./routes/admin/routesAdmin.js";
import Routes4 from "./routes/routesUsers.js";
import routerUserDestacados from "./routes/users/routesDestacados.js";
import routerUserProductos from "./routes/users/routesProductos.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import mysql from "mysql";
//import bcrypt from "bcrypt";
//const saltRounds = 10;
//import jwt from "jsonwebtoken";
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.use("/users", Routes4);
app.use("/admin/destacados", Routes2);
app.use("/admin/productos", Routes3);
app.use("/blogs", Routes1);

app.use("/destacados", routerUserDestacados);
app.use("/shop", routerUserProductos);
app.use("/admin", routerAdmin);
/*
app.use(
  session({
    key: "userId",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 10 * 60 * 20 * 30,
    },
  })
);*/

try {
  await db.authenticate();
  console.log("conexion exitosa");
} catch (error) {
  console.log(`errror de conexion :${error} `);
}

/*
const dbb = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "dartearte",
});
*/
/*
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const rol = "cliente";
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    dbb.query(
      "INSERT INTO users (username, password,rol) VALUES (?,?,?)",
      [username, hash, rol],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    req.send("yo , we need a token , please ");
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "u failed to autenticated" });
      } else {
        req.idUser = decoded.id;
        next();
      }
    });
  }
};
app.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send("yo, u are authenticated congrats");
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  dbb.query(
    "SELECT * FROM users WHERE username = ?",
    username,

    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            const id = result[0].id;
            const token = jwt.sign({ id }, "jwtSecret", {
              expiresIn: 300,
            });
            req.session.user = result;

            res.json({ auth: true, token: token, result: result });
          } else {
            res.json({ auth: false, message: "wrong username/password" });
          }
        });
      } else {
        res.json({ auth: false, message: "noo userr exists" });
      }
    }
  );
});
*/
app.listen(3001, () => {
  console.log("SERVER UP RUNNING IN HTTP://LOCALHOST:8000");
});
