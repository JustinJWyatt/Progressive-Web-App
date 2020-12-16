document.getElementById('Destination').addEventListener("keyup", function (e) {
    let searchField = this.value;
    if (searchField === '') {
        document.getElementById('filter-records-destination').innerHTML = '';
        document.querySelector('.DestinationLocations').style.display = 'none';
        return;
    }
    let regex = new RegExp(searchField, "i");
    let output = '<ul class="list-group list-group-flush">';
    let count = 1;
    console.log(regex)
    $.each(airportData, function(key, val){
        if ((val.city.search(regex) != -1) || (val.code.search(regex) != -1)) {
          output += '<li class="list-group-item">' + val.code + " - " + val.name +  '</li>'
          if(count%2 == 0){
          }
          count++;
        }
      });
      output += '</ul>';
      document.querySelector('.DestinationLocations').style.display = 'block';
      $('#filter-records-destination').html(output);

});

document.getElementById('Origin').addEventListener("keyup", function (e) {
    let searchField = this.value;
    if (searchField === '') {
        document.getElementById('filter-records-origin').innerHTML = '';
        document.querySelector('.OriginLocations').style.display = 'none';
        return;
    }
    let regex = new RegExp(searchField, "i");
    let output = '<ul class="list-group list-group-flush">';
    let count = 1;
    console.log(regex)
    $.each(airportData, function(key, val){
        if ((val.city.search(regex) != -1) || (val.code.search(regex) != -1)) {
          output += '<li class="list-group-item">' + val.code + " - " + val.name +  '</li>'
          if(count%2 == 0){
          }
          count++;
        }
      });
      output += '</ul>';
      document.querySelector('.OriginLocations').style.display = 'block';
      $('#filter-records-origin').html(output);
});



//Find more infor and source code @ https://www.js-tutorials.com/jquery-tutorials/live-search-json-objects-data-using-jquery/