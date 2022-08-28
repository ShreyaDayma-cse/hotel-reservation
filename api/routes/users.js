import express from "express";
import {createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next) =>{
//     res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next) =>{
//     res.send("hello user, you are logged in and can now delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next) =>{
//     res.send("hello Admin, you are logged in and can now delete all accounts")
// })
//CREATE
router.post("/",  createUser);
//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id",verifyUser, deleteUser);
//GET
router.get("/:id",verifyUser, getUser);
//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router