var vat = .15; // 15% vat will apply.


//<-----1st --->

var priceOne = 240;;
var elementQuantityOne = document.getElementById("quantity-one");
var elementPriceOne = document.getElementById("price-one");
var plusOne = document.getElementById("increment-one");
var minusOne = document.getElementById("decrement-one");
var removeOne = document.getElementById("remove-one");
//<-----2nd --->
var priceTwo = 400;
var elementQuantitySecond = document.getElementById("quantity-two");
var elementPriceSecond = document.getElementById("price-two");
var plusTwo = document.getElementById("increment-two");
var minusTwo = document.getElementById("decrement-two");
var removeTwo = document.getElementById("remove-two");



var elementTotal = document.getElementById("total");
var elementSubTotal = document.getElementById("subtotal");
var elementVat = document.getElementById("vat");



function calculateSubtotal() {
  return (priceOne * parseInt(elementQuantityOne.value)) + (priceTwo * parseInt(elementQuantitySecond.value));
}

function calculateVat(subtotal) {
  return subtotal * vat;
}

function calculateTotal(subtotal, vatAmount) {
  return subtotal + vatAmount;
}

function initializeProducts() {
 
  elementPriceOne.textContent = priceOne
  elementPriceSecond.textContent = priceTwo;

  var subtotal = calculateSubtotal();
  var vatAmount = calculateVat(subtotal);
  elementVat.textContent = vatAmount;
  elementSubTotal.textContent = subtotal;
  elementTotal.textContent = calculateTotal(subtotal, vatAmount);
}

initializeProducts();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
plusOne.addEventListener("click", function () {

  var currentQuantityOne = parseInt(elementQuantityOne.value) + 1;
  elementQuantityOne.value = currentQuantityOne;
  var currentPriceOne = priceOne * currentQuantityOne;
  elementPriceOne.textContent = currentPriceOne;


  var subtotal = calculateSubtotal();
  var vatAmount = calculateVat(subtotal);
  var total = calculateTotal(subtotal, vatAmount);
  elementSubTotal.textContent = subtotal;
  elementVat.textContent = vatAmount;
  elementTotal.textContent = total;


});

////////////..........................
minusOne.addEventListener("click", function () {

  var currentQuantityOne = parseInt(elementQuantityOne.value) - 1;
  if (currentQuantityOne !== 0) {
    elementQuantityOne.value = currentQuantityOne;
    var currentPriceOne = priceOne * currentQuantityOne;
    elementPriceOne.textContent = currentPriceOne;

    
   }//else{
  //   elementQuantityOne.value = 0;

  // }
var subtotal = calculateSubtotal();
    var vatAmount = calculateVat(subtotal);
    var total = calculateTotal(subtotal, vatAmount);
    elementSubTotal.textContent = subtotal;
    elementVat.textContent = vatAmount;
    elementTotal.textContent = total;
});


////////////////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>2nd


plusTwo.addEventListener("click", function () {
  
 
  var currentQuantitySecond = parseInt(elementQuantitySecond.value) + 1;
  elementQuantitySecond.value = currentQuantitySecond;
  var currentPriceTwo = priceTwo * currentQuantitySecond;
  elementPriceSecond.textContent = currentPriceTwo;
  elementSubTotal.textContent = currentPriceTwo + parseInt(elementPriceOne.textContent);

  var subtotal = calculateSubtotal();
  var vatAmount = calculateVat(subtotal);
  var total = calculateTotal(subtotal, vatAmount);
  elementSubTotal.textContent = subtotal;
  elementVat.textContent = vatAmount;
  elementTotal.textContent = total;

});
minusTwo.addEventListener("click", function () {

  var currentQuantitySecond = parseInt(elementQuantitySecond.value) - 1;
  if (currentQuantitySecond !== 0) {
    elementQuantitySecond.value = currentQuantitySecond;
    var currentPriceTwo = priceTwo * currentQuantitySecond;
    elementPriceSecond.textContent = currentPriceTwo;
    elementSubTotal.textContent = currentPriceTwo - parseInt(elementPriceOne.textContent);

   
   }
  //else{
  //   elementQuantitySecond.value  = 0;
  // }
  var subtotal = calculateSubtotal();
  var vatAmount = calculateVat(subtotal);
  var total = calculateTotal(subtotal, vatAmount);
  elementSubTotal.textContent = subtotal;
  elementVat.textContent = vatAmount;
  elementTotal.textContent = total;

});


///////////////////___________________reomove  

removeOne.addEventListener("click",function(){

  document.getElementById("product-one").style.display ="none";

  
   currentQuantityOne = parseInt(elementQuantityOne.value) - 1;
  elementQuantityOne.value = 0;
   currentPriceOne = priceOne * currentQuantityOne;
  elementPriceOne.textContent = currentPriceOne;


   subtotal = calculateSubtotal();
   vatAmount = calculateVat(subtotal);
   total = calculateTotal(subtotal, vatAmount);
  elementSubTotal.textContent = subtotal;
  elementVat.textContent = vatAmount;
  elementTotal.textContent = total;
  
  

 
})
removeTwo.addEventListener("click",function(){
 
  document.getElementById("product-two").style.display ='none';
  
 currentQuantitySecond = parseInt(elementQuantitySecond.value) - 1;
  elementQuantitySecond.value = 0;
  currentPriceTwo = priceTwo * currentQuantitySecond;
  elementPriceSecond.textContent = currentPriceTwo;
  elementSubTotal.textContent = currentPriceTwo + parseInt(elementPriceOne.textContent);

  subtotal = calculateSubtotal();
  vatAmount = calculateVat(subtotal);
  total = calculateTotal(subtotal, vatAmount);
  elementSubTotal.textContent = subtotal;
  elementVat.textContent = vatAmount;
  elementTotal.textContent = total;

})


////////////// btn-check


var btnCheck = document.getElementById("btn-check");
btnCheck.addEventListener("click",function(){

  document.getElementById("product-one").style.display ="none";
  document.getElementById("product-two").style.display ="none";
  alert("Success");

 elementSubTotal.textContent = 0;
 elementVat.textContent = 0;
 document.getElementById("btn-check").disabled = true;
})


