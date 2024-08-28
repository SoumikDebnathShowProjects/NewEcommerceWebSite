import express from 'express'
const router=express.Router()//exportng express router
import userSignUpController from '../controller/userSignup';
router.post('/signup',router)
export default router;