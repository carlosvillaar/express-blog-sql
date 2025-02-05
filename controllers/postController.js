const connection = require('../data/db')

const index = (req, res) => {

  const sql = 'SELECT * FROM posts'

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({error: 'Query al db fallita'});
    res.json(results);
  });

}

const show = (req, res) => {
  const id = req.params.id;

  res.send(`Dettaglio post ${id}`)
}

const store = (req, res) => {
  res.send('Creazione post');
}

const update = (req, res) => {
  const id = req.params.id;
  res.send(`Modifica post ${id}`);
}

const modify = (req, res) => {
  const id = req.params.id;
  res.send(`Modifica post ${id}`);
}

const destroy = (req, res) => {

  const id = req.params.id;

  const sql = 'DELETE FROM posts WHERE id = ?'

  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({error: 'Eliminazione del post fallita'});
    res.sendStatus(204);
  })
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}