const express = require('express')
const port = 3000

const app=express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

app.get('/bmicalculator',((req, res) => {
    res.sendFile(__dirname+'/bmicalculator.html')
}))
app.post('/bmicalculator',((req, res) => {
    res.sendFile(__dirname+'/bmicalculator.html')
}))


app.listen(port, function (){
    console.log(`app launched at http://localhost:${port}`)
})