const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const PORT = 5000;
const { connectDB } = require('./configDB/db');
const userRouter  = require("./routes/userRouter")
const ticketRouter = require('./routes/ticketRouter')
const cors = require('cors')

// connect to db 
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cors({
    origin : '*'
}))

//Routes
app.use('/api/users', userRouter)
app.use('/api/tickets', ticketRouter)



server.listen(PORT, () => {
    console.log(`Server ALive on ${PORT}`);
});
