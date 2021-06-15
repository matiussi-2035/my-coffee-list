const { Sequelize, DataTypes } = require('sequelize');

//Creating database connection
const sequelize = new Sequelize('coffeelist', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
  });

  //Testing the connection
  sequelize.authenticate()
    .then(() => {
        console.log('Connection successfully stablished!')
    })
    .catch((err) =>{
        console.log(err)
    } )
    
    const Pagamento = sequelize.define('pagamentos', {
      // Model attributes are defined here
      nome: {
        type: DataTypes.STRING,
      },
      valor: {
        type: DataTypes.INTEGER
        // allowNull defaults to true
      }
    });

//Create the table
//    User.sync({force: true});

Pagamento.create({
    nome: "Pagamento 1",
    valor: 222
})

