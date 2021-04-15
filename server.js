const express = require('express')


const app = express() 


app.use(express.json())



app.set('view engine' , 'pug') ;


app.get('/' , (req , res) => {


res.send('hello everybody!!')



} )



app.get('/home' , (req , res) => {



res.sendFile(__dirname+'/views/home.html')




})


app.get('/contact' , (req,res) => {


res.render('contact' , {title : "contact" , message : "Welcome to contact page"})



})

const uuid = require ('uuid')

var users = [

{ id: uuid.v4() ,

   name: "Mohamed" , 
   
   age :30


},

{
    id: uuid.v4() ,

   name: "Ali" , 
   
   age :29


},

{  
    id: uuid.v4() ,

   name: "Mostfa" , 
   
   age :45

}]


app.get('/users' , (req,res) => {


res.status(200).send(users) 



})


app.get('/users/:id' , (req,res) => {


let user = users.filter ((el) =>  el.id === req.params.id ) 


res.status(200).send(user)




})


app.post('/addUser' , (req,res) => {


users = [...users , {id : uuid.v4() , name:"Ahmed" , age : 25}]


res.send({msg : "user added" , users}) 



})

app.put('/users/:userId' , (req,res) => {

users =  users.map(el => el.id === req.params.userId  ? el = {id:uuid.v4() , name : "Hakim" , age:28} : el)


res.send({msg: "user updated" , users})



})

app.delete('/users/:id' , (req,res) => {


users = users.filter (el => el.id !==  req.params.id)

res.send({msg:"user deleted" , users})

})

















app.listen(5000 , (err) => {

if (err) {

    console.log('server error ! ')

}

else {


    console.log("server running at port 5000........");
}




})
