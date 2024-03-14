import express from 'express'
import cors from 'cors'
import fs from 'node:fs'

const app = express()

// Disable CORS rules
app.use(cors())

app.get('/', (req, res) => {
    res.send('It works!')
})

app.get('/api/:producto', async function (req, res) {
  try {
    let datos = fs.readFileSync('./mock.json','utf-8')
    res.send(datos)
  } catch {
    res.send('Error 033920')
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
})

export default app