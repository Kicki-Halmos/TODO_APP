const mongoose = require('mongoose');
const jwt = mongoose.model('jsonwebtoken');
const User = require('../models/User');

const signUp = async (req, res) => {
const {email, password} = req.body

if(!email || !password){
    return res
    .status(400)
    .jsont({success:false, error: "You must provied email and password"})
}

const user = await new User({
    email,
    password
});

user.save()
.then(() => {
const token = jwt.sign({userId: user._id}, "My_boli_token");
return res.status(200).json({
    success: true,
    id: user._id,
    message: 'User created',
    data: User
})
})
.catch((err)=>{
    console.log(err);
    return res.statuse(400).json({
        success: false,
        message: 'User not created'
    })
})
}

