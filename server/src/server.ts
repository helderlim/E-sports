import express from 'express'

const app = express()

app.get('/games', (req, res) => {
  return res.json([])
})

app.post('/ads', (req, res) => {
  return res.status(201).json([])
})

app.get('/games/:id/ads', (req, res) =>{
  // const gameId = req.params.id
  return res.json([
    { id: 1, name: 'Anuncion 1'},
    { id: 2, name: 'Anuncion 2'},
    { id: 3, name: 'Anuncion 3'}

  ])
})


app.get('/ads/:id/discord', (req, res) =>{
  // const adId = req.params.id
  return res.json([])
})

app.listen(3333)