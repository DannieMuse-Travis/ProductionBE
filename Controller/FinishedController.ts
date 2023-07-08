import express,{Request,Response} from "express"
import FinishedModel from "../model/FinishedModel"

export const CreateTask = async (req:Request,res:Response):Promise<Response>=>{
    try {
        const {task,priority} = req.body
        const tasked = await FinishedModel.create({
            task,priority
        })
        return res.status(201).json({
            message:"task created",
            data:tasked,
        })
    } catch (error) {
    return  res.status(404).json({
        message:"task cant  be created"
      })  
    }
}

export const getTask = async (req:Request,res:Response):Promise<Response>=>{
    try {
    
        const tasked = await FinishedModel.find()
        return res.status(201).json({
            message:"task created",
            data:tasked,
        })
    } catch (error) {
    return  res.status(404).json({
        message:"task cant  be created"
      })  
    }
}

export const getOneTask = async (req:Request,res:Response):Promise<Response>=>{
    try {
          const {id} = req.params
        const tasked = await FinishedModel.findById(id)
        return res.status(201).json({
            message:"task created",
            data:tasked,
        })
    } catch (error) {
    return  res.status(404).json({
        message:"task cant  be created"
      })  
    }
}

export const UpdateTask = async (req:Request,res:Response):Promise<Response>=>{
    try {
          const {id} = req.params
        const tasked = await FinishedModel.findByIdAndUpdate(id,{
            isComplete:true,
        },
        {new:true}
        )
        return res.status(201).json({
            message:"task update",
            data:tasked ,
        })
    } catch (error) {
    return  res.status(404).json({
        message:"task cant  be created"
      })  
    }
}

export const DeleteTask = async (req:Request,res:Response):Promise<Response>=>{
    try {
          const {id} = req.params
        const tasked = await FinishedModel.findByIdAndDelete(id)
        return res.status(201).json({
            message:"task delete",
            data:tasked ,
        })
    } catch (error) {
    return  res.status(404).json({
        message:"task cant  be created"
      })  
    }
}