import express from 'express';
import data from './data';
// import config from './config';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoute from './routes/userRoute'

dotenv.config({ path: './config/config.env' });

console.log('este es el processsss -> ', process.env.MONGO_URI);


connectDB();



const app = express();

app.use('/api/users', userRoute);

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = data.products.find( prod => prod._id === productId);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({
            message: 'Product Not Found'
        })
    }

});

app.listen(5000, () => console.log('Server started on port 5000'))