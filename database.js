const mongoose = require('mongoose');

const URL = 'mongodb+srv://salaoUser:fxc120906@clusterdev.ieymkki.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDev';

mongoose
  .connect(URL)
  .then(() => console.log('Banco de dados conectado!'))
  .catch((err) => console.error('Erro ao conectar ao banco de dados:', err));
