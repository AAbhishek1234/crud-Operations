import { query } from "express";
import Product from "../models/Product.js";


export const createProduct= async (req,res) => {
    try {
        const{title,price,description}=req.body;
        let newproduct = new Product({title,price,description});
        await newproduct.save();
        return res.status(200).json({product:newproduct })
    } catch (error) {
        return res.status(500).json({success:false , message:"invalid server error"})

    }
}



 export const getAllProduct = async (req,res) => {
    try {
        const allproduct = await Product.find();
if(!allproduct || allproduct.length ===0){
    return res.status(400).json({msg:"no product found"})
}
return res.status(200).json({success:true , product:allproduct})
    } catch (error) {
        return res.status(500).json({success:false , message:"invalid server error"})
    }
}



export const updateProduct = async (req,res) => {
    try {
        const {id}=req.query;
        console.log(id);
        
        const{title,price}=req.body;
        const productdetail = await Product.findByIdAndUpdate(id,{title,price},{new:true})
        return res.status(200).json({product:productdetail})
    } catch (error) {
        return res.status(500).json({success:false , message:"invalid server error"})
    }
}



export const deleteProduct = async (req,res) => {
    try {
        const {id}=req.query;
const productdetail = await Product.findByIdAndDelete(id)

if(!productdetail){
    return res.status(404).json({msg:"product can not find "})
}
return res.status(200).json({product:productdetail,msg:"product deleted successfully"})
    } catch (error) {
        return res.status(500).json({success:false,message:"invalid server error"})
    }
}