import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT
import app from './app'

app.listen(PORT , ()=>{
    console.log(`server listening at port ${PORT}`)
})