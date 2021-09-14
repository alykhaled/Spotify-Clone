const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const artistRoute = require('./routes/artist');
const trackRoute = require('./routes/track');
const albumRoute = require('./routes/albums');

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
app.use("/api/artist",artistRoute);
app.use("/api/track",trackRoute);
app.use("/api/album",albumRoute);

app.get("/",(req,res) => {
    res.send("HELLO")
})

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is running on port 8000');
});