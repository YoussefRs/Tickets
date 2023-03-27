const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const PORT = 5000;
const { connectDB } = require('./configDB/db');
const userRouter  = require("./routes/userRouter")

// connect to db 
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

//Routes
app.use('/api/users', userRouter)



server.listen(PORT, () => {
    console.log(`Server ALive on ${PORT}`);
});
