const db = require('./db')

const Recipe = db.sequelize.define('recipe', {
    name: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    method: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: db.Sequelize.STRING,
    },
    // coffeeId:{
    //     type: db.Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'Coffees',
    //         key: 'id'
    //     }
    // }
})

//Creating the table recipe, run only one time
// Recipe.sync({force: true})

module.exports = Recipe