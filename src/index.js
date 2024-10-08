const getConnection = require('./db');
const getServer = require('./server');


const server = getServer();


server.get('/api/projectCard', async (req, res) => {
  const conn = await getConnection();
  if (!conn) {
    res.status(500).json({ success: false, error: "Error con la conexion." });
    return;
  }
  const [results] = await conn.query("SELECT * FROM autora, proyectos  WHERE idautora = autora_idautora;");
  res.json({ success: true, data: results });
  await conn.close();
});


server.post('/api/projectCard', async(req, res) => {

  const conn = await getConnection();
  if (!conn) {
    res.status(500).json({ success: false, error: "Error con la conexion." });
    return;
  }
  try {
    await conn.beginTransaction();
    const [existeAutora]  = await conn.query("SELECT * FROM autora WHERE nombre_autora like ?", [req.body.autor]);

    let autoraId
    if (existeAutora.length == 0) {
      const [autoraResults] = await conn.query(
        'INSERT INTO `autora` (`nombre_autora`, `trabajo`, `foto_autora`) VALUES (?, ?, ?);',
        [ req.body.autor, req.body.job, req.body.photo ]
      );
      autoraId = autoraResults.insertId
    } else {
      autoraId = existeAutora[0].idautora
    }

    const [proyectResults] = await conn.query('INSERT INTO `proyectos` (`autora_idautora`,`nombre_proyecto`, `slogan`, `repositorio`, `demo`, `tecnologias`, `descripcion`, `foto_proyecto` ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
    [ autoraId, req.body.name, req.body.slogan, req.body.repo, req.body.demo, req.body.technologies, req.body.desc, req.body.image ]);

    await conn.commit();
    res.json({ success: true, id: proyectResults.insertId });
  } catch (err) {
    await conn.rollback();
    res.status(400).json({ success: false });
  }
  await conn.close();
});

server.get('/api/projectCard/:id', async (req, res) => {
  const conn = await getConnection();
  if (!conn) {
    res.status(500).json({ success: false, error: "Error con la conexion." });
    return;
  }
  
  const projectId = req.params.id;

  const [results] = await conn.query(
    "SELECT * FROM autora, proyectos WHERE idautora = autora_idautora AND idproyectos = ?",
    [projectId]
  );

  if (results.length > 0) {
    res.json({
      success: true,
      data: results[0]
    });
  } else {
    res.status(404).json({ success: false});
  }
  await conn.close();
});