import User from "../models/User.js";

export const login = async (req,res) => {
    try{
    const {email,password}=  req.body;
    const userExists = await User.exists({email,password});
if(!userExists){
    return res.status(404).json({msg:"user does not exists"})
}
return res.status(200).json({msg:"login successfully",token:"abcdef"})
}
catch(err){
    res.status(500).json({msg:"not match"})
}
}


