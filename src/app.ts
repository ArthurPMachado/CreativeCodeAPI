import 'reflect-metadata';
import express from 'express';
import './database/connection';
import router from './routes';

const server = express();

server.use(express.json());
server.use(router);

export default server;
