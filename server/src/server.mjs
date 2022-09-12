import express from 'express'

const app = express()

app.get('/ads', (req, res) =>{
  res.send('Acessou Ads!')
})

app.listen(3333)