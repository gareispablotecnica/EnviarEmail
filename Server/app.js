const Express= require('express')
const App= Express()

require('dotenv').config()
const PORT=process.env.PORT ||5000

const cors= require('cors')
App.use(cors())
App.use(Express.json())


App.listen(PORT, () => {
    console.log(`🚀 http://localhost:${PORT}`)
})