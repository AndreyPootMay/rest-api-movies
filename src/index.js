const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/movies'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Servidor en puerto ${app.get('port')}`);
});
