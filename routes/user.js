import express from 'express';
import userLogin from '../controller/signin';
// import userRegister from "../controllers/userRegister";
import auth from '../middleware/auth';



const router = express.Router();


// router.post('/register', userRegister);

router.post('/signin', userLogin);


























export default router;