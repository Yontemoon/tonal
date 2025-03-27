import express from 'express'
import { TColors, TFormatColors } from '@customTypes/index'
import { COLOR_URL } from './constant'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' })
})

app.get('/colors', async (_req, res) => {
  const response = await fetch(COLOR_URL, {
    method: 'POST',
    body: JSON.stringify({
      model: 'default',
    }),
  })
  const data: TColors = await response.json()

  const formattedColors = [] as TFormatColors[]

  const allColors = data.result
  allColors.forEach((color, index) => {
    if (index === 0) {
      formattedColors.push({
        background: color,
        text: allColors[1],
      })
    } else {
      formattedColors.push({
        background: color,
        text: allColors[0],
      })
    }
  })

  res.json(formattedColors)
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

module.exports = app
