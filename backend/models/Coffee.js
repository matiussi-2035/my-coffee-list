//Getting the databse connection
const db = require('./db')

const Coffee = db.sequelize.define('coffee', {
    name: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    roast: {
        type: db.Sequelize.STRING
    },
    acidity:{
        type: db.Sequelize.INTEGER,
        defaultValue: 0
    },
    bitter:{
        type: db.Sequelize.INTEGER,
        defaultValue: 0
    },
    chocolate:{
        type: db.Sequelize.INTEGER,
        defaultValue: 0
    },
    floral:{
        type: db.Sequelize.INTEGER,
        defaultValue: 0
    },
    fruity:{
        type: db.Sequelize.INTEGER,
        defaultValue: 0
    },
    herbal:{
        type: db.Sequelize.INTEGER,
        defaultValue: 0
    },
    body:{
        type: db.Sequelize.STRING,
        defaultValue: 'na'
    },

})
//Creating the table coffee, run only one time
// Coffee.sync({force: true})

module.exports = Coffee