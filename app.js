const models = require('./models'),
      Sequelize = require('sequelize')



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
