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

  res.send(`post ${id} eliminato`);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}