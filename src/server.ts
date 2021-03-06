import express from 'express';

const server = express();

server.use(express.json());

server.listen(3030, () => console.log('Server is running!'));
