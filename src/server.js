import express from 'express';
import passport from 'passport';
import session from 'express-session';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import alertRoutes from './routes/alert.js';
import cartRoutes from './routes/cart.js';
import courierRoutes from './routes/courier.js';
import voucherRoutes from './routes/voucher.js';
import passportConfig from './configs/passport.js';
import { connectMongoDB } from './configs/mongodb.js';
import cors from 'cors';

dotenv.config();

const app = express();
const API_PORT = process.env.API_PORT;
const API_URL = process.env.API_BASE_URL;

passportConfig(passport);

app.use(express.json());
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use('/auth', authRoutes);
app.use('/alerts', alertRoutes);
app.use('/cart', cartRoutes);
app.use('/courier', courierRoutes);
app.use('/voucher', voucherRoutes);

connectMongoDB();

app.listen(API_PORT, '0.0.0.0', () => console.log(`API server is running at ${API_URL}:${API_PORT}`));