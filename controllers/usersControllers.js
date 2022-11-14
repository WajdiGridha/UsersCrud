const User = require('../models/usersModel')

const getUsers = async(req,res) => {
    const users = await User.find()
    res.status(200).json(users)
}

const addUser = async(req,res) => {
    if(!req.body){
        res.status(400)
        throw new Error('Please add a text for')
    }

    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    res.status(200).json(user)
}

const updateUser = async (req,res) => {
    const user = await User.findById(req.params.id)

    if(!user){
        res.status(400)
        throw new Error('User not Found')
    }

    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updateUser);
}

module.exports = {getUsers , addUser , updateUser}