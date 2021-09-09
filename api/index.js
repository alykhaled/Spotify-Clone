const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected"))
    .catch(err => console.log(err));


app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});