const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 3000

//config static file
// app.use(express.static(path.join))

//use Middlewares
app.use(morgan('dev'))

app.get('/', (req, res) => {
  // res.send('HÊLO LÂM GS!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})