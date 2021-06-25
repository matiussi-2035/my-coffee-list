const express = require('express')
const consign = require('consign')
const path = require('path')

const app = express()

//Indicando para o express que iremos trabalhar com dados json
app.use(express.json())


app.use(express.static(__dirname + '/uploads'));

consign()
	.include('./api/coffee.js')
	.then('./api/recipe.js')
	.into(app)
	

app.listen(8080, () =>{
    console.log("Server online at 8080... ")
})

