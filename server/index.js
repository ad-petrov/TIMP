require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const PORT = process.env.PORT || 5000


const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', router)

app.get('/:file', (req, res)=>{
  res.sendFile(__dirname+'/public_html/'+req.params.file);
});

app.get('/', (req, res)=>{
  res.sendFile(__dirname+'/public_html/index.html');
});

// app.get('/', (req, res)=>{
//     res.status(200).json({'message':'working'})
// })

const start = async () => {
  try {
      await sequelize.authenticate()
      await sequelize.sync({force:false})
      app.listen(PORT, () => console.log(`Serv ${PORT}`))
  }
  catch (e) {
      console.log(e)
  }
}

start()