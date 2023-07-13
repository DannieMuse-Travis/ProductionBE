"use strict";
// import express,{Request,Response} from "express"
// import AuthModel from "./router/AuthRouter"
// import bcrypt from "bcrypt"
// export const ReadUser= async(req:Request,res:Response):Promise<Response>=>{
//     try {
//         const user = await AuthModel.find()
//         return res.status(200).json({
//             message:"get all users",
//             data:user,
//         });
//     } catch (error) {
//         return res.status(400).json({
//             message:"User not found"
//         })
//     }
// }
// // npm i @types/bcrypt ==== npm i bcrypt
// export const CreateUser= async(req:Request,res:Response):Promise<Response>=>{
//     try {
//       const {userName,password,email,avater} = req.body
//       const salt = await bcrypt.genSalt(10)
//       const hash = await bcrypt.hash(password,salt)
//         const newUser = await AuthModel.create({userName,password:hash,email,avater})
//         return res.status(200).json({
//             message:"get all users",
//             data:newUser,
//         });
//     } catch (error) {
//         return res.status(400).json({
//             message:"User not found"
//         })
//     }
// }
// export const signInAccout= async(req:Request,res:Response):Promise<Response>=>{
//     try {
//         const {email,password}=req.body;
//         const user = await AuthModel.findOne({email});
//         if (user) {
//           const passed = await bcrypt.compare(password, user.password!)  
//           if (passed) {
//             return res.status(201).json({
//                 message: `Welcome back ${user.userName}`
//             });
//           } else {
//             return res.status(404).json({
//      message : 'password is incorrect',
//             }) ;
//           }
//         } else {
//             return res.status(404).json({
//                 message: 'user not found'
//             })
//         }
//     } catch (error) {
//         return res.status(404).json({
//             message : error.message
//         })
//     }
// }
// export const UpdateUser= async(req:Request,res:Response):Promise<Response>=>{
//     try {
//         const {id}=req.params   
//       const {userName, avater} = req.body
//         const user = await AuthModel.findByIdAndUpdate(
//             id,
//             {userName , avater},
//             {new: true}
//         );
//         return res.status(200).json({
//             message:"Update all users",
//             data:user,
//         });
//     } catch (error) {
//         return res.status(400).json({
//             message:"User not found"
//         })
//     }
// }
// export const readOneUser= async(req:Request,res:Response):Promise<Response>=>{
//     try {
//       const {id} = req.params
//         const  user= await AuthModel.findById(id);
//         return res.status(200).json({
//             message:"Get one User Successfully",
//             data:user,
//         });
//     } catch (error) {
//         return res.status(400).json({
//             message:"User not found"
//         })
//     }
// }
// export const deleteOneUser= async(req:Request,res:Response):Promise<Response>=>{
//     try {
//       const {id} = req.params
//         const user = await AuthModel.findByIdAndDelete(id)
//         return res.status(200).json({
//             message:"Deleted Successfully",
//             data:user,
//         });
//     } catch (error) {
//         return res.status(400).json({
//             message:"User not found"
//         })
//     }
// }
