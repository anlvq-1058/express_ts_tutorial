import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import router from './router/api';

const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

app.use('/', router());
