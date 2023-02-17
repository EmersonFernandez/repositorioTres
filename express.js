const express = require('express')
const app = express()

app.get('/home', (req, res) =>{
res.send('Hello______')
})

app.use((rep,res)=>{
    res.status('404').send('este es el home ')
})

app.listen(3000)