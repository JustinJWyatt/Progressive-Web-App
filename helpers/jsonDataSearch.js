// var data = [];
// let airportData;

// function loadJSON(callback) {

//     var httpReq = new XMLHttpRequest();
//     httpReq.overrideMimeType("application/json");
//     httpReq.open('GET', './assets/data/airports.json', true);
//     httpReq.setRequestHeader('Access-Control-Allow-Headers', '*');
//     httpReq.setRequestHeader('Content-type', 'application/ecmascript');
//     httpReq.setRequestHeader('Access-Control-Allow-Origin', '*');
//     httpReq.onreadystatechange = function () {
//         if (httpReq.readyState == 4 && httpReq.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(httpReq.responseText);
//         }
//     };
//     httpReq.send(null);
// }

// function init() {
//     loadJSON(function (response) {
//         // Parsing JSON string into object
//         airportData = JSON.parse(response);
//         for (var i in airportData) {
//             data.push([i, airportData[i]]);
//         }
//     });
// }
// init();

// This code above doesnt work!

$('#txt-search-destination').keyup(function () {
    var searchField = $(this).val();
    if (searchField === '') {
        $('#filter-records').html('');
        return;
    }

    var regex = new RegExp(searchField, "i");
    var output = '<div class="row">';
    var count = 1;
    $.each(data, function (key, val) {
        if ((val.city.search(regex) != -1) || (val.state.search(regex) != -1)) {
            output += '<div class="col-md-6 well">';
            output += '<div class="col-md-7">';
            output += '<h5>' + val.city + '</h5>';
            output += '<p>' + val.state + '</p>'
            output += '</div>';
            output += '</div>';
            if (count % 2 == 0) {
                output += '</div><div class="row">'
            }
            count++;
        }
    });
    output += '</div>';
    $('#filter-records').html(output);
});

$('#txt-search-origin').keyup(function () {
    var searchField = $(this).val();
    if (searchField === '') {
        $('#filter-records').html('');
        return;
    }

    var regex = new RegExp(searchField, "i");
    var output = '<div class="row">';
    var count = 1;
    $.each(data, function (key, val) {
        if ((val.city.search(regex) != -1) || (val.state.search(regex) != -1)) {
            output += '<div class="col-md-6 well">';
            output += '<div class="col-md-7">';
            output += '<h5>' + val.city + '</h5>';
            output += '<p>' + val.state + '</p>'
            output += '</div>';
            output += '</div>';
            if (count % 2 == 0) {
                output += '</div><div class="row">'
            }
            count++;
        }
    });
    output += '</div>';
    $('#filter-records').html(output);
});

        //Find more infor and source code @ https://www.js-tutorials.com/jquery-tutorials/live-search-json-objects-data-using-jquery/