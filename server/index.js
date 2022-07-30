import cors from "cors";
import db from "./config/database.js";
import express from "express";
import orderRoutes from "./routes/index.js";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/orders', orderRoutes);

app.listen(3001, () => console.log('Server running on port 3001'));