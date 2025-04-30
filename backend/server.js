import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv'  ;
import cookieParser  from 'cookie-parser';
import  connectDB   from './config/db.js';
import router from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import swaggerDocs from "./config/swagger.js";
import jobrouter from './routes/jobs.route.js';
import application_router from './routes/application.route.js';
import Candidaterouter from './routes/candidate.route.js';

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000;
connectDB();

const allowedOrigins = ['http://localhost:5173']


app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials:true}));


// API ENDPOINTS 
app.use('/api/auth', router);
app.use('/api/user', userRoute)
app.use("/api/jobs", jobrouter);
app.use("/api/apply", application_router);
app.use("/api/user/candidate", Candidaterouter);

swaggerDocs(app);

app.listen(PORT, () => {

  console.log(`Server Started on port: http://localhost:${PORT}`);
});
