const express= require('express');
const shortid= require('shortid');

const server= express().use(express.json());

server.post('/api/users');


const PORT= 5000;
server.listen(PORT, () => {
  console.log( `\n ** Server running on http://localhost:${PORT} ** \n` );
});

