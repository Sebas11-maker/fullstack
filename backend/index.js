const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// "Base de datos" en memoria
let tasks = [];

// API
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  tasks.push({ id: tasks.length + 1, title });
  res.json({ message: 'Tarea agregada' });
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));