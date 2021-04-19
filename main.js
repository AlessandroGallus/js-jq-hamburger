$(document).ready(function(){

  console.log("il dom è stato caricato");

  var hambicon = $(".header-right a");
  var hambmenu = $(".hamburger-menu");
  var cicon = $(".hamburger-menu .close")
  
  $(hambicon).click(function(){
    hambmenu.show();
  });

  $(cicon).click(function(){
    hambmenu.hide();
  });


})
console.log("il dom non è stato caricato");
