import express from 'express';
import { config } from 'dotenv';
import { dbConn } from './config/dbConn.js';
import {authRouter}  from './routes/authRoutes.js';
import { userRouter } from './routes/userRoutes.js';
config()
const PORT = process.env.PORT
const app = express();

app.use(express.json());


app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);






// port and db
dbConn(process.env.MONGO_URL);

app.listen(PORT,()=>{
console.log(`listening to port ${PORT}`)

})