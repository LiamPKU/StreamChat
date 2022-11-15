const express = require('express')
const cors = require('cors')

const app = express()
const authRoutes = require("./routes/auth.js")
const PORT = process.env.PORT || 8000

require('dotenv').config()//导入环境变量

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.use('/auth',authRoutes)
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))