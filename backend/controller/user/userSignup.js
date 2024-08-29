import userModel from '../../models/userModel.js'
import bcrypt from 'bcryptjs'



async function userSignUpController(req,res){
    try{
        //we are grabing the request body wich is in form of object
        const { email, password, name} = req.body
        //taking the email of the user
        const user = await userModel.findOne({email})

        console.log("user",user)
        //if there is already an email present throw err
        if(user){
            throw new Error("Already user exits.")
        }

        if(!email){
           throw new Error("Please provide email")
        }
        if(!password){
            throw new Error("Please provide password")
        }
        if(!name){
            throw new Error("Please provide name")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);
        //if the hash function is not created
        if(!hashPassword){
            throw new Error("Something is wrong")
        }
        //if the hash function is created then it will be over written in the passowrd section 

        const payload = {
            ...req.body,
            role : "GENERAL",
            password : hashPassword
        }

        const userData = new userModel(payload)//every time it will create a new user model
        const saveUser = await userData.save()//the system awaits for the data to save
        //if the data is saved the this bellow message is shown

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User created Successfully!"
        })


    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}

export default userSignUpController