const express = require("express")
const path = require("path")
const { addAbortSignal } = require("stream")

const app = express()

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname,'public', 'index.html'))
// });

app.use(express.static(path.join(__dirname, 'public')))



app.listen(process.env.PORT || 5000)