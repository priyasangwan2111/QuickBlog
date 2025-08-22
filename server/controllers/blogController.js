

import fs from 'fs'
import imagekit from '../configs/imageKit.js'
import Blog from '../models/Blog.js';


export const addBlog=async(req,res)=>{
    try{
        const{title,subTitle,description,category,isPublished}=JSON.parse
        (req.body.blog);
        const imageFile=req.file;

        //check if all fields are present
        if(!title || !description|| !category ||!imageFile){
            return res.json({success:false,message:"missing required fields"})

        }
        const fileBuffer=fs.readFileSync(imageFile.path)
        const response=await imagekit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder:'/blogs'
        })
        //optmization through imagekit
        const optimizedImageUrl=imagekit.url({
            path:response.filePath,
            transformation:[
                {quality:'auto'},
                {format:"webp"},
                {width:'1280'}
            ]
        })
        const image=optimizedImageUrl;
        await Blog.create({title,subTitle,description,category,image,
            isPublished
        })
        res.json({success:true,message:'Blog added successfully'})
    }catch(error){
        res.json({success:false,message:error.message})
    }
}


export const getAllBlogs=async(req,res)=>{
    try{
        const blogs=await Blog.find({isPublished:true})
        res.json({success:true,blogs})
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}

export const getBlogById=async(req,res)=<{
    
}