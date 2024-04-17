const express=require('express');
const router=express.Router();
const postMod=require('../model/post');

router.use(express.json());
// api
router.post('/add',async(req,res)=>{
    try{
        const data =req.body;
        await postMod(data).save();
        res.send({message:"Data added"})
    }catch(error){
        console.log(error)
    }
})
