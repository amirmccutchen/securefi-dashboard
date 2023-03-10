import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';

// data, uncomment when adding new data to db from (sample)data folder

// import User from './models/User.js';
// import Product from './models/Product.js';
// import ProductStats from './models/ProductStats.js';
// import Transaction from './models/Transaction.js';
// import OverallStats from './models/OverallStats.js';
// import AffiliateStats from './models/AffiliateStats.js';
// import { dataUser, dataProduct, dataProductStats, dataTransaction, dataOverallStats, dataAffiliateStats } from './sampleData/index.js';

// configuration

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy : 'cross-origin'}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes

app.use('/client', clientRoutes);
app.use('/general', generalRoutes)
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

// mongoose
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,})
      .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
        // initializing data
        // User.insertMany(dataUser);
        // Product.insertMany(dataProduct);
        // ProductStats.insertMany(dataProductStats);
        // Transaction.insertMany(dataTransaction);
        // OverallStats.insertMany(dataOverallStats);
        // AffiliateStats.insertMany(dataAffiliateStats);
      })
      .catch(error => console.log(`${error} did not connect`));