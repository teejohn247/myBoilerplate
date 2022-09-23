import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db';
import userRouter from './routes/user';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDoc from './swagger.json';
import Debug from 'debug';
// import logger from 'morgan';
import cors from 'cors';
// import path from 'path';
import http from 'http';

import bodyParser from 'body-parser';

import multer from 'multer'
const upload = multer()









const app = express();
dotenv.config();

app.use(express.json());


app.use(bodyParser.json({
  limit: '50mb'
}));

app.use(bodyParser.urlencoded({
  limit: '50mb',
  parameterLimit: 100000,
  extended: true 
}))

const server = http.createServer(app);
const { Server } = require("socket.io");



app.use(express.static('public'));

// app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', "*");
  next();
};
app.use(allowCrossDomain);


const port = process.env.PORT || 4000;
const debug = Debug('http');

connectDb();

// app.use('/hta', swaggerUi.serve, swaggerUi.setup(swaggerDoc));



app.get('/api/v1', (req, res) => {
  res.json({
    message: 'Welcome to HTA API'
  });
});

app.use('/api/v1', userRouter);

server.listen(process.env.PORT || 4000, () => console.log(`Server has started. ${port}`));

export default app;
