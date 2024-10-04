const getConnection = require('./db');
const getServer = require('./server');

const server = getServer();

server.get('/series',async (_, res) => {
  const conn = await getConnection();
  
  if(!conn) {
    res.status(500).send('connection lost');
    return;
  }
});

server.get ('/', (req, res) => {
  res.send('Funciona!')
});