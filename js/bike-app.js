export class BikeApp {
  constructor(){
  }

  byLocation(location){
    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=10&stolenness=stolen`)
    .then(function(response){
      let bikes = response.bikes;
      bikes.forEach(function(bike){
        $('#stolenBikes').append(`<li>${bike.title}</li>`);
      });
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }
}
