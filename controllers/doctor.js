import doctorAccountdb from '../models/doctorAccountdb.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';




export const loginForm =(req,res) => {
    res.render("logins/login"); 
};
export const login2 = async (req,res) => {
    const username=req.body.username
    const password=req.body.password
  const loggedstudent =  await doctorAccountdb.findOne({username});
  const isCorrectPassword=await doctorAccountdb.findOne({password});
//   const isCorrectPassword= bcrypt.compareSync(
//       password,
//       loggedstudent.password,
//   );
if(loggedstudent&&isCorrectPassword){
 
    
        res.render("doctors/doctor"); 
      }else{
        return res.send('incorrect user jhjhkjk bassword');
      };
    };