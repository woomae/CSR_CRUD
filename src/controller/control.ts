import { RequestHandler } from "express";
import Topic from "../DB/DB_config";



export const getAllUser: RequestHandler = async (req, res, next) => {
    const AllUser:Topic[] = await Topic.findAll();
    return res
        .status(200)
        .json({ message: "fetched successfully", data: AllUser });
};

export const getUserById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const topic: Topic | null = await Topic.findByPk(id);
    return res.status(200).json({ message: "fetched successfully", data: topic });
};

export const createUser: RequestHandler = async (req, res, next) => {
    const {title, description, author} = req.body;
let topic= await Topic.create({title, description, author});
    return res
    .status(200).json({ message: "created successfully", data: topic });
}

export const deleteUser: RequestHandler = async (req,res,next)=>{
    const {id} = req.params;
    const deleteUser:Topic| null = await Topic.findByPk(id);
    await Topic.destroy({where:{id}});
    return res.status(200).json({ message: "deleted successfully", data: deleteUser });
}

export const updateUser: RequestHandler = async (req,res,next)=>{
    const {id} = req.params;
    const {title, description, author} = req.body;
    await Topic.update({title, description, author},{where:{id}});
    const topic:Topic|null = await Topic.findByPk(id);
    return res.status(200).json({ message: "updated successfully", data: topic });
}