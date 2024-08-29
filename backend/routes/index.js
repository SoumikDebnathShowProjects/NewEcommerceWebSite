import express from 'express'
const router=express.Router()//exportng express router

import userSignUpController from '../controller/user/userSignup.js';





router.post('/signup',userSignUpController)
export default router;