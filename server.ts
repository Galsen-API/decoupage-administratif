import express from 'express';
import cors from 'cors';
import api from './api';
import { createServer } from 'http';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', api);

const server = createServer(app);