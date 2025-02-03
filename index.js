const express = require('express');
const app = express();
app.use(express.json());

app.get('/signup' , (req,res) => {
    const{username , dob , password , email} = req.query;

    if(username){
        for(let i = 0 ; i<username.length ; i++){
            if(!((username[i] >= 'a' && username[i] <= 'z')||(username[i] >= 'A' && username[i] <= 'Z'))){
                return res.send("Username cannot be empty")
            }
        }
    }
    
    if(email){
        if(!email.includes('@') || !email.includes('.') || email.indexOf('@')>email.lastIndexOf('.')){
            return res.send("Email cannot be empty")
        }
    }

    if(password){
        if(password.length<8){
            return res.send("Password length should be greater than 8 or less than or equal to 16")
        }
    }

    if(dob){
        const birthDate = new Date(dob);
        const currentDate = new Date();
    }
    res.send("Signup Successful")
});

const PORT = 3000;
app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});