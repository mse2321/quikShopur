$(document).ready( function() {

  var items = $.makeArray();

// Add item handler
  $('#list-form').on('keydown', function(event){
  	if(event.keyCode === 13){
  		addItem($('#item').val());

  		return false;
  	}
  });

// On Add Button Click
  $('#addButton').click(function(){
  	addItem($('#item').val());

  	return false;
  });


// splitting text from element
  $('#list-items').on('click', 'li span', function(event){
  	var removeItem = $(this).parent().text().split(' ')[0];
  	items = items.filter(function(item){ return item !== removeItem });
  	drawList();
  });

// The additem fucntion
  function addItem(item){
	  items.push(item);
	  $('#item').val('');
	  drawList();
  }

// Inserts HTML for items
  function drawList(){
	  var content = '';
	  $('#list-items').html('');

	  items.forEach(function(item){
	  content += "<li contenteditable='true'>" + item + " <span class='removeItem'>X</span></li>";
	  });

	  $('#list-items').html(content);
  }
});