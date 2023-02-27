import express from "express";
const server = express()

server.use(express.json())

let custumers = [
    { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br"},
    { id: 2, name: "Google", site: "http://google.com"},
    { id: 3, name: "UOL", site: "http://uol.com.br"}
]

server.get("/custumers", (req, res) => {
    return res.json(custumers)
})

server.get("/custumers/:id", (req, res) => {
    const id = parseInt(req.params.id) 
    const custumer = custumers.find(item => item.id === id)
    const status = custumer ? 200 : 404

    return res.status(status).json(custumer)
})

server.post("/custumers", (req, res) => {
    const { name, site } = req.body
    const id = custumers[custumers.length - 1].id + 1

    const newCustumer = { id, name, site }
    custumers.push(newCustumer)

    return res.status(201).json(newCustumer)
})

server.put("/custumers/:id", (req, res) =>{
    const id = parseInt(req.params.id)
    const { name, site } = req.body
    
    const index = custumers.findIndex(item => item.id === id)
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        custumers[index] = { id: parseInt(id), name, site }
    }

    return res.status(status).json(custumers[index])
})




server.listen(3000)
 