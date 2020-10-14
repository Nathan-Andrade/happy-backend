import express from 'express';
import path from 'path';
import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'upoloads')))

//servidor na porta 3333
app.listen(3333);