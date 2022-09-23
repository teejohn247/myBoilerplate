import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import User from '../model/User';
import utils from '../config/utils';

dotenv.config();

const signin = async (req, res) => {

    try{ 
        const {email, password} = req.body;
        let user = await User.findOne({ email });
        if(!user){
            res.status(400).json({
                status: 400,
                success: false,
                error: 'Incorrect Email or Password'
            })
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
           res.status(404).json({
                status: 404,
                success: false,
               error: 'Invalid login credentials'
           })
           return;
        }
        const token = utils.encodeToken( user.id, user.email);
        res.status(200).json({
            status: 200,
            success: true,
            data: user,
            token: token
        })
    }catch(error){
        res.status(500).json({
            status: 500,
            success: false,
            error:'server error'
        })
    }
}

export default signin;
