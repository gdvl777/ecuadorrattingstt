const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/miBaseDeDatos', (err, db) => {
  if (err) {
    console.log('Error al conectar a la base de datos');
  } else {
    console.log('Conexión establecida con la base de datos');
  }
});








db.close();
