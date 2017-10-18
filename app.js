const models = require('./models');
'use strict'

console.log('party party')
function createProduct(){
  const product = models.Product.build({
    make:'Sure',
    modelNum:'SM58',
    info:'this is a micrphpne for live sound',
    // tags: ['mic', 'micrphpne', 'live']
  });

user.save().then(function(newProduct){
  console.log(newProduct.dataValues);
})
}


createProduct();

function listProducts() {

models.Product.findAll().then(function (products) {
  products.forEach(function(product){
    console.log(product.dataValues);
  })
})
}

listProducts();
