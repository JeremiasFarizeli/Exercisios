import express from "express";
const server = express()

server.get("/hello", (req, res) => {
    return res.status(200).json({title: "Hello Wolrd"})
})

server.listen(3000)
