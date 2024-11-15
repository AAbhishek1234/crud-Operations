import User from "../models/User.js";

export const createUser = async (req,res)=>{
try{
    const{name,email,password}=req.body
const user = new User({name,email,password})
const userExists = await User.exists({email}).lean()
if(userExists){
    return res.status(201).json({msg:"user already exists"})
}
const savedUser = await user.save()
res.status(200).json(savedUser)
}

catch(err){
        console.log(err)
        res.status(500).json({msg:"user not found"})
    
}
}


export const fetchall = async (req, res) => {
    try {
        const users = await User.find();  
        if (!users || users.length === 0) {
            return res.status(404).json({ msg: "No users found" });
        }
        return res.status(200).json(users);
    } catch (err) {
        console.error(err);  
        return res.status(500).json({ msg: "Server error, unable to fetch users" });
    }
};
