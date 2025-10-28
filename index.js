const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/',(req ,res)=>{
    res.send('user server is available')
})

const users = [
    { id:1 , name: 'sabana' , email: 'sabana@gmail.com'},
    { id:2 , name: 'sabnoor' , email: 'sabnoor@gmail.com'},
    { id:1 , name: 'sabila' , email: 'sabila@gmail.com'}
]


app.get('/users' , (req, res)=>{
    res.send(users);
})

app.post('/users',(req,res)=>{
    console.log('post method call',req.body);
    const newUser = req.body;
    newUser.id = users.length+1;
    users.push(newUser);
    res.send(newUser);
    
    
})


app.listen(port,()=>{
    console.log(`user server is started : ${port}`);
    
})