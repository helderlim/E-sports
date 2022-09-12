import express from 'express'

const app = express()

app.get('/ads', (req, res) =>{
  return res.json([
    { id: 1, name: 'Anuncion 1'},
    { id: 2, name: 'Anuncion 2'},
    { id: 3, name: 'Anuncion 3'}

  ])
})

app.listen(3333)