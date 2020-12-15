$('#txt-search').keyup(function(){
            var searchField = $(this).val();
			if(searchField === '')  {
				$('#filter-records').html('');
				return;
			}
			
            var regex = new RegExp(searchField, "i");
            var output = '<div class="row">';
            var count = 1;
			  $.each(data, function(key, val){
				if ((val.employee_salary.search(regex) != -1) || (val.employee_name.search(regex) != -1)) {
				  output += '<div class="col-md-6 well">';
				  output += '<div class="col-md-3"><img class="img-responsive" src="'+val.profile_image+'" alt="'+ val.employee_name +'" /></div>';
				  output += '<div class="col-md-7">';
				  output += '<h5>' + val.employee_name + '</h5>';
				  output += '<p>' + val.employee_salary + '</p>'
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

        //https://www.js-tutorials.com/jquery-tutorials/live-search-json-objects-data-using-jquery/