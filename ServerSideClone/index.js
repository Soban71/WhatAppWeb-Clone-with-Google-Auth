import express from 'express';
import Connection from './Database/db.js'
import Route from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser'

const app=express();


app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',Route)


Connection();
const PORT=8000;

app.listen(PORT ,()=> console.log(`port is running on port ${PORT}`));