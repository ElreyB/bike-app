import { BikeApp } from './../js/bike-app.js';


function loadTimer() {
  let timer = setTimeout(showTimer(), 3000);
}

function loadResults() {
  let timer = setTimeout(showResults(), 5000);
}

function showResults() {
  $(".results").show();
  $(".loader").hide();
}

function showTimer() {
  $(".loader").show();
}

$(document).ready(function(){
  let bike = new BikeApp();
  $(".location").submit(function(e){
    e.preventDefault();
    loadResults();
    loadTimer();
    $("ul#stolenBikes").empty();
    const userLocation = $("input.location").val();
    const userAmount = $("input.amount").val();
    bike.byLocation(userLocation, userAmount);
  });
});
