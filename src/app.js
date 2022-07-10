import express from 'express';
import config from './config';
import cors from 'cors';
import userRoutes from './routes/login.js';
import bodyParser from 'body-parser';
const app = express();
//let port = 6000;

app.use(cors());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', config.port);
app.use(userRoutes);
export default app;