import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes'
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string'

const app = express()

app.use(express.json())

//em prod mudar o dominio -> origin: http...
app.use(cors())

const prisma = new PrismaClient()

app.get('/games', async (req, res) => {
  //trazendo games e seus ads
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        }
      }
    }
  })
  return res.json(games)
})

app.post('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;
  const body = req.body;
console.log(body)
  //To-do Validação
  //zod biblioteca

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlay: body.yearsPlay,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    }
  })


  return res.status(201).json(ad)
})

app.get('/games/:id/ads', async (req, res) =>{
  const gameId = req.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlay: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId: gameId
    },
    orderBy: {
      createdAt: 'desc',
    }
  })
  return res.json(ads.map( ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinutesToHourString(ad.hourStart),
      hourEnd: convertMinutesToHourString(ad.hourEnd)
    }
  }))
})


app.get('/ads/:id/discord', async (req, res) =>{
  const adId = req.params.id

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId
    }
  })
  return res.json({
    discord: ad.discord,
  })
})

app.listen(3333)