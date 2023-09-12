const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/sound/:name', function (req, res) {
  const { name } = req. params
  if(name == 'dog') {
      res.json({'sound' : '멍멍'})
    } else if (name=='cat'){
      res.json({'sound':'야옹'})
    } else if (name == 'pig'){
      res.json({'sound' : '꿀꿀'})
    }
    else 
    res.json('error')
    
      console.log(name)
  })
  

app.listen(3000,()=>{console.log('3000번 포트 열림')})