import express from 'express';
import cors from 'cors';
import api from './api';
import { createServer } from 'http';

interface Todo {
  title: string;
  id: number;
  color: string;
  finish: boolean;
  deadLine: Date;
}

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', api);

let todos: Todo[] = [
    { id: 1, title: 'Acheter du lait', color: 'blue', finish: false, deadLine: new Date('2023-04-08') 
    },
    { id: 20,title: 'Aller à la gym', color: 'red', finish: false, deadLine: new Date('2023-04-10') 
    },
    { id: 3,title: 'Faire les courses', color: 'green', finish: true, deadLine: new Date('2023-04-15') 
    },
];

// GET all todos
app.get('/', (req, res) => {
  res.send(todos);
});
/*
// GET todo by id
app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send('Todo not found');
  }
});

// POST new todo
app.post('/todos', (req, res) => {
  const todo: Todo = req.body;
  todo.id = todos.length + 1;
  todos.push(todo);
  res.json(todo);
});

// PUT update todo by id
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex === -1) {
    res.status(404).send('Todo not found');
    return;
  }
  const updatedTodo: Todo = req.body;
  todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };
  res.json(todos[todoIndex]);
});

// DELETE todo by id
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  res.status(204).send();
});
*/
const port = 3000;
const server = createServer(app);
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});