import { BikeApp } from './../js/bike-app.js';

$(document).ready(function(){
  let bike = new BikeApp();
  $(".location").submit(function(e){
    e.preventDefault();
    const userLocation = $("input.location").val();
    $(".results").removeClass("hide");
    bike.byLocation(userLocation);
    });
});
