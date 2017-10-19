function convertDate(date){
  let newDate = new Date(date * 1000);
  let convertedDate = (newDate.getMonth() + 1) + "/" + (newDate.getDay() + 1) + "/" + newDate.getFullYear();
  return convertedDate;
}


export class BikeApp {
  constructor(){
  }

  byLocation(location, amount){
    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=${amount}&location=${location}&distance=10&stolenness=proximity`)
    .then(function(response){
      let bikes = response.bikes;
      bikes.forEach(function(bike){
        $('#stolenBikes').append(`<li><span class="line-header">Bike Model:</span> ${bike.title}<br><span class="line-header">Date Stolen:</span>  ${convertDate(bike.date_stolen)}</div></li><br>`);
      });
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }
}
