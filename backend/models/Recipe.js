const db = require('./db')

const Recipe = db.sequelize.define('recipe', {
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    grindSize:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    coffeeWaterRatio:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    method: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: db.Sequelize.STRING,
    },
   
})

//Creating the table recipe, run only one time
// Recipe.sync({force: true})

module.exports = Recipe