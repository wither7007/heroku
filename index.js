const express=require("express")
const app =express()
app.get('/', (req, res) => {
    res.send('Greetings from Smith Lodge')
  });
app.listen(process.env.PORT||5000)