const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const router = require('./routes/baseRoutes');


const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT
app.listen(PORT, () => console.log("listen to port" + PORT))


