import express,{Request,Response} from "express"
import Donetask from "../model/DoneModel"

export const CreateTask = async (req:Request,res:Response):Promise<Response>=>{
    try {
        const {task,priority} = req.body
        const tasked = await Donetask.create({
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

export const getAllTask = async (req:Request,res:Response):Promise<Response>=>{
    try {
    
        const tasked = await Donetask.find()
        return res.status(201).json({
            message:"task created",
            data:tasked,
        })
    } catch (error) {
    return  res.status(404).json({
        message:"task can't be gotten"
      })  
    }
}

export const getOneTask = async (req:Request,res:Response):Promise<Response>=>{
    try {
          const {id} = req.params
        const tasked = await Donetask.findById(id)
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
        const tasked = await Donetask.findByIdAndUpdate(id,{
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
        const tasked = await    Donetask.findByIdAndDelete(id)
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