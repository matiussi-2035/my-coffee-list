const express = require('express')

const coffee = require("./models/Coffee")

const app = express()

//Indicando para o express que iremos trabalhar com dados json
app.use(express.json())

app.post('/add-coffee', (req, res) =>{
	coffee.create({
		name: req.body.name,
		roast: req.body.roast,
		floral: req.body.floral
	}).then(() =>{
		res.send("Coffee successfully registred.")
	}).catch(error =>{
		res.send("An error occured while trying to register your coffee. " + error)
	})
})
app.listen(8080, () =>{
    console.log("Server online at 8080... ")
})

