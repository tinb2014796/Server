//improt from pakege
const express = require('express');
const mongoose = require('mongoose');
const adminRouter = require('./routes/admin');
//import from other files
const authRoute = require("./routes/auth");
const productRoute = require('./routes/product');
const userRouter = require('./routes/user');

//client -> middleware server -> client

//init 
const PORT = 3000;
const app = express();
const db = 'mongodb+srv://tin0106:tin123@atlascluster.uab9r56.mongodb.net/?retryWrites=true&w=majority';
//middleware
app.use(express.json());
app.use(authRoute);
app.use(adminRouter);
app.use(productRoute);
app.use(userRouter);
//connections
mongoose.connect(db).then(() => {
    console.log('connecion successfull!');
}).catch((err) => {
    console.log(err);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
});





