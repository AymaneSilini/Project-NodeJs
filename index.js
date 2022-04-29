const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

const categoryRouter = require('./routes/category.route');
const commentRouter = require('./routes/comment.route');
const discountRouter = require('./routes/discount.route');
const gameRouter = require('./routes/game.route');
const orderlineRouter = require('./routes/order-line.route');
const orderRouter = require('./routes/order.route');
const platformRouter = require('./routes/platform.route');
const requirementsRouter = require('./routes/requirements.route');
const userRouter = require('./routes/user.route');

app.use(cors({
    origin: '*'
}));

app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION)
.then(()=>console.log("connexion ok to database"))
.then(app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
}))
.catch((err)=> console.log(err));


app.use('/category', categoryRouter);
app.use('/comment', commentRouter);
app.use('/discount', discountRouter);
app.use('/game', gameRouter);
app.use('/orderline', orderlineRouter);
app.use('/order', orderRouter);
app.use('/platform', platformRouter);
app.use('/requirements', requirementsRouter);
app.use('/user', userRouter);
