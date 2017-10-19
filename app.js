const models = require('./models'),
      Sequelize = require('sequelize'),
      express = require('express'),
      bodyParser = require('body-parser');
let app = express();

//boiler plate body parser can talk to the html and get it recieve it in app.js

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


console.log('party party')

//this creates the table for all the products
function createProduct(){
  const product = models.Product.build({
    make:'Sure',
    modelNum:'SM58',
    info:'this is a micrphpne for live sound'
    // tags: ['mic', 'micrphpne', 'live']
  });
  product.save().then(function(newProduct){
    console.log(newProduct.dataValues);
  })
  }


  // createProduct();

  function listProducts() {

  models.Product.findAll().then(function (products) {
    products.forEach(function(product){
      console.log(product.dataValues);
    })
  })
  }

  listProducts();

  function createUser(){
    const user = models.User.build({
      name:'Bailey Bryant',
      userName :'bkittyface',
      bio : 'I like cats you fool'
      // tags: ['mic', 'micrphpne', 'live']
    });

  user.save().then(function(newUser){
    console.log(newUser.dataValues);
  })
  }

// createUser();

function listUsers() {

models.User.findAll().then(function (users) {
  users.forEach(function(user){
    console.log(user.dataValues);
  })
})
}

listUsers();

app.listen(3000, function() {
  console.log('successfully started Express Application');
})

process.on('SIGINT', function() {
  console.log("\nshutting down");
  const index = require('./models/index')
  index.sequelize.close()

  // give it a second
  setTimeout(function() {
    console.log('process exit');
    process.exit(0);
  }, 1000)
});
