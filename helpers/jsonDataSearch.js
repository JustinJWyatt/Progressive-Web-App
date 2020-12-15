document.getElementById('Destination').addEventListener("keyup", function (e) {
    let searchField = this.value;
    if (searchField === '') {
        document.getElementById('filter-records').innerHTML = '';
        return;
    }
    let regex = new RegExp(searchField, "i");
    let output = '<div class="row">';
    let count = 1;
    console.log(regex)
    $.each(airportData, function(key, val){
        if ((val.city.search(regex) != -1) || (val.code.search(regex) != -1)) {
          output += '<div class="col-md-6 well">';
          output += '<div class="col-md-7">';
          output += '<p>' + val.code + " - " + val.name +  '</p>'
          output += '</div>';
          output += '</div>';
          if(count%2 == 0){
            output += '</div><div class="row">'
          }
          count++;
        }
      });
      output += '</div>';
      $('#filter-records').html(output);

});
document.getElementById('Origin').addEventListener("keyup", function (e) {
    let searchField = this.value;
    if (searchField === '') {
        document.getElementById('filter-records').innerHTML = '';
        return;
    }
    let regex = new RegExp(searchField, "i");
    let output = '<div class="row">';
    let count = 1;
    console.log(regex)
    $.each(airportData, function(key, val){
        if ((val.city.search(regex) != -1) || (val.code.search(regex) != -1)) {
          output += '<div class="col-md-6 well">';
          output += '<div class="col-md-7">';
          output += '<p>' + val.code + " - " + val.name +  '</p>'
          output += '</div>';
          output += '</div>';
          if(count%2 == 0){
            output += '</div><div class="row">'
          }
          count++;
        }
      });
      output += '</div>';
      $('#filter-records').html(output);
});

//Find more infor and source code @ https://www.js-tutorials.com/jquery-tutorials/live-search-json-objects-data-using-jquery/