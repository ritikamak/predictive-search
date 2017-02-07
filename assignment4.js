// Ritika Maknoor
// CS 1520
// Assignment 4

$(document).on('ready', function() {
  var elements = [];
  $('.flexsearch-searchbar-list').hide();


  $.ajax({
    type: 'GET',
    url: 'http://www.mattbowytz.com/simple_api.json?data=all',

  	error: function() {
  	  console.log('Uh oh. An error has occured!');
  	},
  	success: function(data) {
  	  var all_elements = data['data'];
  	  var interests_elements = all_elements.interests;
  	  var programming_elements = all_elements.programming;
  	  var comics_elements = all_elements.comics;
  	  $.each(interests_elements, function(i, v){
  	    elements.push(v);
  	  });
  	  $.each(programming_elements, function(i, v){
  		elements.push(v);
  	  });
   	  $.each(comics_elements, function(i, v){
  		elements.push(v);
  	  });
  	}
  });


  $('.flexsearch-input').on('keyup', function() {
    var text_input = $(this).val();
  	$('.flexsearch-searchbar-list').empty();

  	if (text_input.length == 0) {
  	  $('.flexsearch-searchbar-list').hide();
  	  return;
  	}

  	var num_elements = 0;

  	$.each(elements, function(i, v) {
  	  if ((v.length >= text_input.length) && (v.substring(0, text_input.length).toLowerCase() == text_input.toLowerCase())) {
  	    $('.flexsearch-searchbar-list').append('<li><a href=\"https://www.google.com/search?q=' + v + '\"><p>' + v + '</p></a></li>');
  		num_elements++;
  	  }
  	});

  	if (num_elements) {
  	  $('.flexsearch-searchbar-list').show();
  	}
  });


  $('#mainForm').on('submit', function(e) {
    document.location = 'https://www.google.com/search?q=' + $('.flexsearch-input').val();
    return false;
  });


  console.log('Keepin\'n it clean with an external script!');
});
