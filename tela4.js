var checa = document.getElementsByName("checkinvest");
var numElementos = checa.length;
var bt = document.getElementById("next5");
for(var x=0; x<numElementos; x++){
   checa[x].onclick = function(){
      var cont = document.querySelectorAll("input[name='checkinvest']:checked").length;
      bt.disabled = cont ? false : true;
   }
}