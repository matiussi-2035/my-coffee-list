const coffee = require("../models/Coffee")

module.exports = app => {

	//Inserting a new coffee
	app.post('/coffee', (req, res) =>{

		const { name, roast, acidity, bitter, chocolate, floral, fruity, herbal, body} = req.body

		coffee.create(

			{name, roast, acidity, bitter, chocolate, floral, fruity, herbal, body}

			).then(() =>{
			res.send("Coffee successfully registred.")
		}).catch(error =>{
			res.send("An error occured while trying to register your coffee. " + error)
		})
	})

	//Getting all user coffees
	app.get('/my-list', (req, res) =>{
		coffee.findAll()
			.then((coffes) =>{
				res.send(coffes)
			}).catch(error =>{
				res.send("It wasn't possible to load your coffee list. " + error)
			})
	})

	//Editing a coffee
	app.put('/coffee/:id', (req, res) =>{
		const { id } = req.params
		const { name, roast, acidity, bitter, chocolate, floral, fruity, herbal, body} = req.body
		
		coffee.update(
			{ name, roast, acidity, bitter, chocolate, floral, fruity, herbal, body},
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
	app.delete('/coffee/:id', (req, res) =>{
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


