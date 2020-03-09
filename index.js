const express= require('express');
const shortid= require('shortid');

const server= express().use(express.json());

//data
const users= [];

server.post('/api/users', (req, res) => {
  if(req.body.name && req.body.bio){
    const user= req.body;
    user.id= shortid.generate();
    if( users.push(user) ){
      res.status(201).json(user);
    }else{
      error= {"error": "There was an error while savingk the user to the database"}
      res.status(500).json(error)
    }//end if push user
    
  }else{
    const error= {"errorMessage": "please provide a name and bio for the user"}
    res.status(400).json(error);
  }//end if
  
});

server.get('/api/users', (req, res) => {
  if( res.status(200).json(users) ){
    res.status(200).json(users);
  }else{
    error= {"error": "The users information could not be retrieved"}
    res.status(500).json(error)
  }
});

server.get('/api/users/:id', (req, res) => {
  const userById= users.filter(user => {
    return user.id === req.params.id
  });
  res.status(200).json(userById);
});




const PORT= 5000;
server.listen(PORT, () => {
  console.log( `\n ** Server running on http://localhost:${PORT} ** \n` );
});

