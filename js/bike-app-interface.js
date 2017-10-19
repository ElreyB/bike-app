import { BikeApp } from './../js/bike-app.js';

$(document).ready(function(){
  let bike = new BikeApp();

  $(document).ajaxStart(function(){
       $("#wait").css("display", "block");
   });
   $(document).ajaxComplete(function(){
       $("#wait").css("display", "none");
       $(".results").show();
   });

  $(".location").submit(function(e){
    e.preventDefault();
    $(".results").hide();
    $("ul#stolenBikes").empty();

    const userLocation = $("input.location").val();
    const userAmount = $("input.amount").val();
    bike.byLocation(userLocation, userAmount);
  });
});
