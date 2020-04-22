const products = [
    {name :"shoes" , price :77},
    {name :"bat" , price :70},
    {name :"helmet" , price :40},
    {name :"gloves" , price :35}
];
const saleProducts = products.map((product) =>{
  if(product.price > 30){
      return {name:product.name , price : product.price /2};
  }else{
      return product;
  }
});
console.log(saleProducts);