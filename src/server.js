//SERVIDOR EXPRESS

//IMPORTAR BIBLIOTECAS

const express = require("express");
const cors = require("cors");

//CREAR VARIABLES
function getServer() {
  const server = express();
  //CONFIGURACIÓN DE EXPRESS
  server.use(cors());
  server.use(express.json({ limit: "10mb" }));
  server.set("view engine", "ejs");

  const port = process.env.PORT || 4000;
  //ARRANCAR EL SERVIDOR
  server.listen(port, () => {
    console.log(`Servidor iniciado escuchando en http://localhost:${port}`);
  });
  server.use(express.static("./public"));
  server.use(express.static("./docs/css"));
  return server;
}

module.exports = getServer;
