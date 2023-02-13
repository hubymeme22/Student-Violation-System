import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/api.js';
import 'dotenv/config';

const app = express();
const serverIP = process.env.IP;
const serverPORT = process.env.PORT;
const dbURI = process.env.MONGODB_URI;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/api', router);

console.log('[*] Connecting to mongodb database');
mongoose.set('strictQuery', true);

// connect to database then start server
mongoose.connect(dbURI)
    .then(() => {
        console.log('[+] Connected to database!');
        app.listen(serverPORT, serverIP, () => {
            console.log(`[+] Server started at http://${serverIP}:${serverPORT}`);
        });
    })
    .catch((error) => {
        console.log('[-] Cannot connect to database uri');
        console.error(error);
    });