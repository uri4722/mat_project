const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const router = require('./routes/baseRoutes');


const corsOptions = {
    // in development mode 
    origin:'http://localhost:3000',   
    // but in production mode it will be the client url
    // origin: process.env.CLIENT_URL,
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT
app.listen(PORT, () => console.log("listen to port" + PORT))


