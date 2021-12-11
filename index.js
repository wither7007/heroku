const express=require("express")
const app =express()
dir="C:\\projects\\heroku\\"

app.get('/', (req, res) => {
    res.sendFile(dir+'index.html')
  });
app.listen(process.env.PORT||5000)