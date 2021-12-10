import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import { v4 as uuid } from 'uuid';

import Connection from './database/db.js';   // Components 
import DefaultData from './default.js';
import Routes from './routes/routes.js';

import path from 'path';

dotenv.config();

const app = express();


app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());


app.use('/', Routes);

// app.use(express.static('public'));
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// })


const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL = `mongodb://${username}:${password}@ecommerceweb-shard-00-00.zztv7.mongodb.net:27017,ecommerceweb-shard-00-01.zztv7.mongodb.net:27017,ecommerceweb-shard-00-02.zztv7.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-n4s80b-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(process.env.MONGODB_URI || URL);

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

app.listen(PORT, () => console.log(`Server successfully running on PORT ${PORT}`));


// Default Data to Database
DefaultData();


export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback';
paytmParams['EMAIL'] = 'sarthakshukla1317@gmail.com';
paytmParams['MOBILE_NO'] = '1234567898';