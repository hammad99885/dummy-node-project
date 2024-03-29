const express = require("express");
const app = express();
const path = require("path");
app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>console.log(`server is running or port ${PORT}`))