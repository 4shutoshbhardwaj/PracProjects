import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Router from './routes/route.js';
import { Connection } from './database/db.js';

const app=express();
app.use(cors());

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));

app.use("/",Router);

const port=9090;

Connection('mongodb+srv://admin:admin123@crud-app.nyjl8gj.mongodb.net/?retryWrites=true&w=majority');

app.listen(port,()=>console.log(`http://localhost:${port}`));