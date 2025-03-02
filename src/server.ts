import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import studentRoutes from "./routes/studentRoute";
import BodyReadable from 'undici-types/readable';
import path from "path";

dotenv.config();
const server = express();

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.use(express.static(path.join(__dirname, "public")));
server.use(express.urlencoded({ extended: true }));

mongoose
    .connect(process.env.MONGODB as string)
    .then(()=> console.log('Connected to MONGODB'))
    .catch(err => console.log(err));

server.use('/' , studentRoutes);

const PORT = process.env.PORT || 5000 
server.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`))