const poolConnection = require("../dbConn/dbConn");
const pool = poolConnection;

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

const sender =  "bekinature@gmail.com";

  var transporter = nodemailer.createTransport({

    service:'hotmail',
    auth: {
      user: 'bekinature@gmail.com', // 
      pass: 'P@$$123w0rD#be', // 
    },
  });

  messageData = {
    message:'',
    sender: '', 
    reciepient:'',
    time: ''

  }

  emailDetails = {
    from: '', //where the email is from 
    to: '', //where the email is to
    subject: '', //email subject
    text: '', //email
  }

//Register fuction 
const createUser = (req, res) => {
    
    const {surname,email,fullname,password,confirm} = req.body; 
    let profilepic = "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
   
     console.log(email)
     console.log(surname)
     console.log(fullname)
    
    
  
    if(password == confirm){
  
     //checking if user already has an account
    pool.query('select * from users where email = $1' ,[email],(error, results)=> {
      
      if (results.rowCount > 0) {
  
        res.send('user has already been registered')
      
      }else{
  
        pool.query('INSERT INTO users (surname,email,fullname,password,profilepic) VALUES ($1,$2,$3,$4,$5) RETURNING email',[surname,email,fullname,password,profilepic],(error, results) => 
        {
    
            if (error) 
              {
                res.send(`sytem error `);
              }
            else{
              emailDetails.from = sender;
            emailDetails.to = results.rows[0].email;
            emailDetails.text = "Hi"+results.rows[0].fullname+'\n\Welcome to Ndlozi Solutions \nGametag: '+results.rows[0].password +'\nPassword: '+results.rows[0].password+'\nYou will be contacted soon \n\nGriend\nYour Gamer Friend.';

            emailDetails.subject = "Credentials request";

            transporter.sendMail(emailDetails,(emailErr)=>{
                if(emailErr){
                    res.status(400).json(emailErr);
                }else{
                    res.status(200).json({message:'Your password has been sent to your to your email address'})
                }
            });
            
                res.send('successfully registered')
              
            }  
           
                
        });
      }
      });
  
    }else{
  
      res.send('password dont match')
    }
    
  };

  module.exports = {
 
    createUser
   
    
  }    
  
