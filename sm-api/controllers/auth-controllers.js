const User = require('../models/user-model')
module.exports.register = async (req,res,next)=>{
    try {
        const {email,password} = req.body
        const user = await User.create({email,password})
    } catch (e) {
        next(e)
    }
}