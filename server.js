const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());

app.get('/api/github',(req,res)=>{
    const githubUrl ='https://github.com/CarterrRyan';
    res.json({url:githubUrl});
});
app.get('/api/twitter',(res,reg)=>{
    const twitterUrl='https://twitter.com/CarterrRyan';
    res.json({url:twitterUrl});
});
app.get('/api/linkedIn',(req,res)=>{
    const linkedInUrl='https://www.linkedin.com/in/carter-todd-b85a03292/';
    res.json({url:linkedInUrl});
});



app.listen(PORT,()=>{
    console.log('Server is running on port',PORT);
});