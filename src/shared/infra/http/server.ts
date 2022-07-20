import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';

import '@shared/container/';

import App from './app';

const port = process.env.PORT || 3001;

new App().init(port);
