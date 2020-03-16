const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({path: './config/config.env'});

const connect = require('./config/db');

connect();

const app = express();

app.use(express.json());
app.use(cors({origin: true, credentials: true}))

const transactions = require('./routes/transaction.routes');

app.use('/api/transactions', transactions);

app.get('/ping', (req, res) => {
    return res.send('Service is up');
})

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server running in ${ENV} on port ${PORT}`));