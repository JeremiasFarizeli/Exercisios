import express from "express";
const server = express()

// http://localhost:3000/hello?nome=Jeremias&idade=41
// Query params = ?nome=Jeremias&idade=21

server.get("/hello", (req, res) => {
    const nome = req.query.nome

    return res.status(200).send(`Olá ${nome} tudo bem?`)
    //return res.status(200).json({title: "Hello Wolrd"})
})


// http://localhost:3000/hello/jeremias/41
// Route params = /hello/:nome

server.get("/hello/:nome/:idade", (req, res) => {
    const { nome, idade } = req.params

    return res.json({
        title: "Hello World",
        message: `Olá ${nome} tudo bem?`,
        idade: idade
    }) 
})




server.listen(3000)
