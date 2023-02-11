import express from 'express';
import cookieParser from 'cookie-parser';
import router from './routes/api.js';
import 'dotenv/config';

const app = express();
const serverIP = process.env.IP;
const serverPORT = process.env.PORT;

app.use(cookieParser());
app.use(express.json());
app.use('/api', router);

app.listen(serverPORT, serverIP, () => {
    console.log(`[+] Server started at http://${serverIP}:${serverPORT}`);
})