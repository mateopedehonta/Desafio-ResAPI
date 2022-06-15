import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/routes.js';

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/static', express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api',router)

app.listen(8080,()=>console.log('Servidor iniciado'))