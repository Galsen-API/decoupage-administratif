import express from 'express';
import cors from 'cors';
import api from './api';
import { createServer } from 'http';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/decoupage-administratif', api);

const port = 8000;
const server = createServer(app);
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/decoupage-administratif/regions`);
});