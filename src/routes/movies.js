const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

/**
 * Consulto todas las películas
 * @param  {[type]} '/'   [description]
 * @param  {[type]} (req, res)          [description]
 * @return {[type]}       [description]
 */
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM movies', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

/**
 * Consulto una película en específico
 * @param  {[type]} '/:id' [description]
 * @param  {[type]} (req,  res)          [description]
 * @return {[type]}        [description]
 */
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM movies WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});


/**
 * Consulto una película por su nombre
 * @param  {[type]} '/:name' [description]
 * @param  {[type]} (req,  res)          [description]
 * @return {[type]}        [description]
 */
router.get('/movie/:name', (req, res) => {
  const { name } = req.params; 
  mysqlConnection.query("SELECT * FROM movies WHERE name LIKE '%" + name + "%'", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

/**
 * Consulto una película por su actor
 * @param  {[type]} '/:name' [description]
 * @param  {[type]} (req,  res)          [description]
 * @return {[type]}        [description]
 */
router.get('/actor/:name', (req, res) => {
  const { name } = req.params; 
  mysqlConnection.query("SELECT * FROM movies WHERE principal_actor LIKE '%" + name + "%'", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

/**
 * Consulto una película por su género
 * @param  {[type]} '/:genre' [description]
 * @param  {[type]} (req,  res)          [description]
 * @return {[type]}        [description]
 */
router.get('/genre/:genre', (req, res) => {
  const { genre } = req.params; 
  mysqlConnection.query('SELECT * FROM movies WHERE genre = ?', [genre], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

/**
 * Consulto una película por su director
 * @param  {[type]} '/:director' [description]
 * @param  {[type]} (req,  res)          [description]
 * @return {[type]}        [description]
 */
router.get('/director/:director', (req, res) => {
  const { director } = req.params; 
  mysqlConnection.query("SELECT * FROM movies WHERE director LIKE '%" + director + "%'", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

/**
 * Elimino una película en específico
 * @param  {[type]} '/:id' [description]
 * @param  {[type]} (req,  res)          [description]
 * @return {[type]}        [description]
 */
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM movies WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: '¡Película eliminada!'});
    } else {
      console.log(err);
    }
  });
});

/**
 * INSERTA UNA PELÍCULA
 * @param  {[String]} '/'   [Ruta del método, en este caso es POST]
 * @param  {[type]} (req, res)          [description]
 * @return {[type]}       [Enviar como parametro de id el 0 dentro del objeto JSON]
 */
router.post('/', (req, res) => {
  const {id, name, year} = req.body;
  console.log(id, name, year);
  const query = `CALL movieAddOrEdit(?, ?, ?);`;
  mysqlConnection.query(query, [id, name, year], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Película guardada'});
    } else {
      console.log(err);
    }
  });

});

/**
 * Actualiza una película
 * @param  {[String]} '/:id' [Ruta del método, en este caso PUT]
 * @param  {[type]} (req,  res)          [description]
 * @return {[type]}        [description]
 */
router.put('/:id', (req, res) => {
  const { name, year } = req.body;
  const { id } = req.params;
  const query = `CALL movieAddOrEdit(?, ?, ?);`;
  mysqlConnection.query(query, [id, name, year], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Película actualizada'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
