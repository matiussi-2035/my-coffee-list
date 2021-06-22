const coffee = require("../models/Coffee")
const cors = require("cors")

module.exports = app => {

   app.use((req, res, next) =>{

      //Definindo quais aplicações podem fazer requisições
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
      app.use(cors())
      next()
  })
	//Inserting a new coffee
	app.post('/add-coffee', (req, res) =>{

		const { name, roast, acidity, bitter, chocolate, floral, fruity, herbal, body} = req.body

		coffee.create(

			{name, roast, acidity, bitter, chocolate, floral, fruity, herbal, body}

			).then(() =>{
			   res.send("Coffee successfully registred.")
		}).catch(error =>{
			res.send("An error occured while trying to register your coffee. " + error)
		})
	})

	//Getting all coffees
	app.get('/coffees', (req, res) =>{
		coffee.findAll()
			.then((coffes) =>{
				res.send(coffes)
			}).catch(error =>{
				res.send("It wasn't possible to load your coffee list. " + error)
			})
	})
	//Get a single coffee
	app.get('/coffee/:id', (req, res) =>{
		const { id } = req.params

		coffee.findOne(
			{
				id:id
			}
		)
		.then((coffee) =>{
			res.send(coffee)
		}).catch(error =>{
			res.send("An error occured while trying to get the coffee. " + error)
		})
	})

	//Editing a coffee
	app.put('/edit-coffee/:id', (req, res) =>{
		const { id } = req.params
		const { name, roast, acidity, bitter, chocolate, floral, fruity, herbal, body, picture} = req.body
		
		coffee.update(
			{ name, roast, acidity, bitter, chocolate, floral, fruity, herbal, body, picture},
			{
				where: {
					id: id
				}
			}
		)
		.then((coffe) =>{
			res.send(200)
		}).catch(error =>{
			res.send("An error occured while trying to edit the coffee. " + error)
		})
	})

	//Deleting a coffee
	app.delete('/delete-coffee/:id', (req, res) =>{
		const { id } = req.params
		coffee.destroy({
			where: {
				id : id
			}
		})
		.then(() => {
			res.send(200)
		}).catch(error => {
			res.send("An error occured while trying to delete the coffee. " + error)
		})
	})
}


