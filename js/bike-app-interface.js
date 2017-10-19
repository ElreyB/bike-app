import { BikeApp } from './../js/bike-app.js';

$(document).ready(function(){
  let bike = new BikeApp();
  $(".location").submit(function(e){
    e.preventDefault();
    $("ul#stolenBikes").empty();
    const userLocation = $("input.location").val();
    const userAmount = $("input.amount").val();
    $(".results").removeClass("hide");
    bike.byLocation(userLocation, userAmount);
    });
});
