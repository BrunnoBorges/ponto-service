const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth')

const User = require('../models/User');

const router = express.Router();

function genereteToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

router.post('/register', async (req, res) => {
    const { email } = req.body;
    try {
        if(await User.findOne({ email })) {
            return res.status(400).send({ error: 'Email já cadastrado'});
        }

        const user = await User.create(req.body);

        user.password = undefined;
        
        return res.send({ 
            user,
            token: genereteToken({id: user.id})
         });

    } catch (err) {
        return res.status(400).send({ error: 'Falha ao cadastrar'});
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if(!user) {
        res.status(400).send({ error: 'Usúario não cadastrado'});
    }
    if(!await bcrypt.compare(password, user.password)) {
        res.status(400).send({ error: 'Senha inválida'});
    }

    user.password = undefined;

    return res.send({ 
        user, 
        token: genereteToken({id: user.id}) 
    });
})

module.exports = app => app.use('/auth', router);
