import studentAccountdb from '../models/studentAccountdb.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const studentAccountdbForm = async(req,res) => {
   const {username,password,acadimicNumber} = req.body;
    const salt =  bcrypt.genSaltSync(10);
    const encryptedPassword=bcrypt.hashSync(password,salt);
    console.log(encryptedPassword);
    await user.create({username,password: encryptedPassword ,acadimicNumber});
    res.redirect('/login');
};


export const loginForm =(req,res) => {
    res.render("logins/login"); 
};
export const login = async (req,res) => {
    const username=req.body.username
    const password=req.body.password
  const loggedstudent =  await studentAccountdb.findOne({username});
  const isCorrectPassword=await studentAccountdb.findOne({password});
//   const isCorrectPassword= bcrypt.compareSync(
//       password,
//       loggedstudent.password,
//   );
if(loggedstudent){
  if(!isCorrectPassword){
      return res.send('incorrect password');
      }else{

        res.render("students/student"); 
      }}else{
        return res.send('incorrect user');
      }
//       const data= {
//           _id: loggedstudent._id,
//          username: loggedstudent.username,

//       };
      
//      const jwtToken = jwt.sign(data, process.env.JWT_SECRET);
//      console.log(jwtToken);

    
//   res.cookie('token',jwtToken); 
//   res.send('loggin')
};