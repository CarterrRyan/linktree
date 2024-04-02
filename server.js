const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/github',(req,res)=>{
    const githubUrl ='https://github.com/CarterrRyan';
    res.json({url:githubUrl});
});



app.listen(PORT,()=>{
    console.log('Server is running on port',PORT);
});