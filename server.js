const express = require('express');

const app = express();
const PORT =3000;

app.use(express.json());

//creating a GET route
app.get('/',(req,res)=>{
    res.send('GET request successful');
});
//creating a POST route
app.post('/',(req,res)=>{
    res.send('POST request successful');
});

//start server 
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
});
