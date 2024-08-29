import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Changed to ES Modules import
import router from './routes/index.js';

dotenv.config(); // Ensure this is called first

const app = express();
app.use(cors());//cosr is used for communicating between two website it's a kind of protocol
app.use(express.json())
app.use('/api',router);//routing the api 

const PORT = process.env.PORT || 8080; // Corrected port fallback order
//if the database is connected only then the server will run
connectDB().then(()=>{

    app.listen(PORT, () => {
        console.log(`The server is running on port ${PORT}`);
    });
});

