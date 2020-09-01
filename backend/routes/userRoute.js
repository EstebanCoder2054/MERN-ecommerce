import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.get('/api/users/createAdmin', async (req, res) => {

    try {
        const user = new User({
            name: 'Esteban',
            email: 'esteban-escobar1111@hotmail.com',
            password: '1234',
            isAdmin: true
        });
    
        const newUser = await user.save();
        res.send(newUser);
    } catch (error) {
        res.send({
            msg: error.message
        })
    }
})

export default router;