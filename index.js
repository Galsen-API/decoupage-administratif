"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("./api"));
const http_1 = require("http");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', api_1.default);
let todos = [
    { id: 1, title: 'Acheter du lait', color: 'blue', finish: false, deadLine: new Date('2023-04-08')
    },
    { id: 20, title: 'Aller à la gym', color: 'red', finish: false, deadLine: new Date('2023-04-10')
    },
    { id: 3, title: 'Faire les courses', color: 'green', finish: true, deadLine: new Date('2023-04-15')
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
const server = (0, http_1.createServer)(app);
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
