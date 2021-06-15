const recipe = require("../models/Recipe")
const coffeeRecipe = require('../models/CoffeeRecipe')

module.exports = app => {

	//Inserting a new recipe
	app.post('/recipe', (req, res) =>{

		const { name, method, description, coffees} = req.body
		recipe.create(

			{ name, method, description}

		).then((newRecipe)=>{
            
			// res.send(newRecipe)
            coffees.forEach(coffeeId =>{
                coffeeRecipe.create(
                    {recipeId: newRecipe.id, 
					coffeeId: coffeeId}
                )
            })
            recipe.findAll()
            .then((recipes)=>{
                res.send(recipes)
            })
            
            // res.send(typeof(recipeId))

        }).catch(error =>{
			res.send("An error occured while trying to register your recipe. " + error)
		})
	})

	//Getting all user recipes
	app.get('/my-recipes', (req, res) =>{
		recipe.findAll()
			.then((recipes) =>{
				res.send(recipes)
			}).catch(error =>{
				res.send("It wasn't possible to load your recipe list. " + error)
			})
	})

	//Editing a recipe
	app.put('/recipe/:id', (req, res) =>{
		const { id } = req.params
		const { name, method, description} = req.body
		
		recipe.update(
			{ name, method, description},
			{
				where: {
					id: id
				}
			}
		)
		.then((coffe) =>{
			res.send(200)
		}).catch(error =>{
			res.send("An error occured while trying to edit the recipe. " + error)
		})
	})

	//Deleting a recipe
	app.delete('/recipe/:id', (req, res) =>{
		const { id } = req.params
		recipe.destroy({
			where: {
				id : id
			}
		})
		.then(() => {
			res.send(200)
		}).catch(error => {
			res.send("An error occured while trying to delete the recipe. " + error)
		})
	})

}


