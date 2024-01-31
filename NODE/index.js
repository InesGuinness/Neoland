const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/db");

// creamos el servidor web
const app = express();

// vamos a configurar deotenv para poder utilizar las variables de entorno del .env
dotenv.config();

connect();
