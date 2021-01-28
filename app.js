document.getElementById("subtotal").textContent  = '0';
document.getElementById("total").textContent = '0';

var elementSubTotal = document.getElementById("subtotal");

//<-----1st --->
var priceOne = 250;
document.getElementById("price-one").textContent = priceOne;
var elementQuantityOne = document.getElementById("quantity-one");
var elementPriceOne = document.getElementById("price-one");
  var plusOne =  document.getElementById("increment-one");
  var minusOne =  document.getElementById("decrement-one");
//<-----2nd --->
var priceTwo = 400;
document.getElementById("price-two").textContent = priceTwo;
var elementQuantitySecond = document.getElementById("quantity-two");
var elementPriceTwo = document.getElementById("price-two");
  var plusTwo =  document.getElementById("increment-two");
  var minusTwo =  document.getElementById("decrement-two");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  plusOne.addEventListener("click",function(){   
   var currentQuantityOne  = parseInt(elementQuantityOne.value)+1; 
   elementQuantityOne.value = currentQuantityOne;
   var currentPriceOne = priceOne*currentQuantityOne;
    elementPriceOne.textContent = currentPriceOne;
    elementSubTotal.textContent = currentPriceOne + parseInt(elementPriceTwo.textContent);
     

  });
  
 ////////////..........................
 minusOne.addEventListener("click",function(){

  var currentQuantityOne  = parseInt(elementQuantityOne.value)-1; 
  if(currentQuantityOne===0){
    document.getElementById("decrement-two") = false;
   }
  elementQuantityOne.value = currentQuantityOne;
  var currentPriceOne = priceOne*currentQuantityOne;
   elementPriceOne.textContent = currentPriceOne;
   elementSubTotal.textContent = currentPriceOne - parseInt(elementPriceTwo.textContent);
    

 });


   ////////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>2nd


   plusTwo.addEventListener("click",function(){
  
    var currentQuantitySecond  = parseInt(elementQuantitySecond.value)+1; 
    elementQuantitySecond.value = currentQuantitySecond;
    var currentPriceTwo = priceTwo*currentQuantitySecond;
     elementPriceTwo.textContent = currentPriceTwo;
     elementSubTotal.textContent = currentPriceTwo + parseInt(elementPriceOne.textContent);
      
 
   });
   minusTwo.addEventListener("click",function(){
  
   var currentQuantitySecond  = parseInt(elementQuantitySecond.value)-1; 
   if(currentQuantitySecond===0){
    document.getElementById("decrement-one")= false;
   }
   elementQuantitySecond.value = currentQuantitySecond;
   var currentPriceTwo = priceTwo*currentQuantitySecond;
    elementPriceTwo.textContent = currentPriceTwo;
    elementSubTotal.textContent = currentPriceTwo - parseInt(elementPriceOne.textContent);
     

  });


