const getConnection = require('./db');
const getServer = require('./server');
const cors = require("cors");

const server = getServer();

server.use(cors()); // Habilitar CORS para todas las rutas


// obtener todo el listado del proyecto de la base de datos
server.get("/api/projectCard", async (req, res) => {
  // Obtener conn con MySQL
  const conn = await getConnection();
  if (!conn) {
    res.status(500).json({ success: false, error: "Error con la conexion." });
    return;
  }
  // Lanzar una query
  const [results] = await conn.query("SELECT * FROM autora, proyectos  WHERE idautora = autora_idautora;");
  // Devolvemos los resultados como JSON
  console.log("Resultados obtenidos de la base de datos:", results);
  res.json(results);
  // Cerrar la conn
  await conn.close();
});

server.post ('/api/projectCard', async(req, res) => {

  const conn = await getConnection();
  if (!conn) {
    res.status(500).json({ success: false, error: "Error con la conexion." });
    return;
  }
  const [results] = await conn.query('INSERT INTO `autora` (`nombre_autora`, `trabajo`, `foto_autora`) VALUES (?, ?, ?);',
  [
    req.body.autor,
    req.body.job,
    req.body.photo,
    
  ]);

  const [result] = await conn.query('INSERT INTO `proyectos` (`autora_idautora`,`nombre_proyecto`, `slogan`, `repositorio`, `demo`, `tecnologias`, `descripcion`, `foto_proyecto` ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
  [
    results.insertId,
    req.body.name,
    req.body.slogan,
    req.body.repo,
    req.body.demo,
    req.body.technologies,
    req.body.desc,
    req.body.image,
    
    
  ]);


  console.log(result);
  res.status(404).json({ message: 'proyecto no integrado correctamente' });

});


