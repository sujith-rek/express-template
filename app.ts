import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import cors from "cors";

import indexRouter from './routes/index.route';
import usersRouter from './routes/users.route';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));


app.use('/', indexRouter);
app.use('/users', usersRouter);


export default app;