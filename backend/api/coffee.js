const coffee = require("../models/Coffee")
const cors = require("cors")
const multer = require("multer")
const path = require('path')
module.exports = app => {

	app.use((req, res, next) => {

		//Definindo quais aplicações podem fazer requisições
		res.header("Access-Control-Allow-Origin", "*")
		res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
		app.use(cors())
		next()
	})

	let pictureName = ""
	const storage = multer.diskStorage({
		destination: function(req, file, cb) {
			cb(null, "uploads/")
		},
		filename: function(req, file, cb) {

			pictureName = file.originalname + Date.now() + path.extname(file.originalname)
			
			cb(null, pictureName)
		
		}
	})
	//Multer is a middleware to handle uploaded files
	const upload = multer({storage})	

	//Inserting a new coffee
	app.post('/add-coffee', upload.single("picture"), (req, res) => {
		const picture = req.picture
		
		// console.log(req.file, req.body)
		const { name, roast, acidity, bitter, chocolate, floral, fruity, herbal, body} = req.body
		if(req.file === undefined){
			pictureName = "default/default.png"
		}
		console.log('picturename '+ pictureName)
		coffee.create(

			{ name, roast, acidity, bitter, chocolate, floral, fruity, herbal, body,
				picture: pictureName
			}

		).then(() => {
			res.send("Coffee successfully registred.")
		}).catch(error => {
			res.send("An error occured while trying to register your coffee. " + error)
		})
	})

	//Getting all coffees
	app.get('/coffees', (req, res) => {
		coffee.findAll()
			.then((coffes) => {
				res.send(coffes)
			}).catch(error => {
				res.send("It wasn't possible to load your coffee list. " + error)
			})
	})
	//Get a single coffee
	app.get('/coffee/:id', (req, res) => {
		const { id } = req.params

		coffee.findOne(
			{
				id: id
			}
		)
			.then((coffee) => {
				res.send(coffee)
			}).catch(error => {
				res.send("An error occured while trying to get the coffee. " + error)
			})
	})

	//Editing a coffee
	app.put('/edit-coffee/:id', (req, res) => {
		const { id } = req.params
		const { name, roast, acidity, bitter, chocolate, floral, fruity, herbal, body, picture } = req.body

		coffee.update(
			{ name, roast, acidity, bitter, chocolate, floral, fruity, herbal, body, picture },
			{
				where: {
					id: id
				}
			}
		)
			.then((coffe) => {
				res.send(200)
			}).catch(error => {
				res.send("An error occured while trying to edit the coffee. " + error)
			})
	})

	//Deleting a coffee
	app.delete('/delete-coffee/:id', (req, res) => {
		const { id } = req.params
		coffee.destroy({
			where: {
				id: id
			}
		})
			.then(() => {
				res.send(200)
			}).catch(error => {
				res.send("An error occured while trying to delete the coffee. " + error)
			})
	})
}


