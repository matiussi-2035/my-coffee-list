//Getting the databse connection
const db = require('./db')

const CoffeeRecipe = db.sequelize.define('coffee_recipe', {
    coffeeId:{
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Coffees',
            key: 'id'
        }
    },
    recipeId:{
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Recipes',
            key: 'id'
        }
    }
})
//Creating the table coffee, run only one time
// CoffeeRecipe.sync({force: true})

module.exports = CoffeeRecipe


    