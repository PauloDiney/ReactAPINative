const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const membroRoutes = require('./routes/membroRoutes');
const projetoRoutes = require('./routes/projetoRoutes');
const tarefasRoutes = require('./routes/tarefasRoutes');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/exer', membroRoutes);

app.use('/exer', projetoRoutes);

app.use('/exer', tarefasRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost: `+port);
});