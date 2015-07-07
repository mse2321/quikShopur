$(document).ready( function() {
	
	//Takes in input
	$("#item").focusout(function(itemVal)	{
		itemVal = $('#item').val();
	$('#item').data('itemVal', itemVal);
		console.log(itemVal);

	itemList = $.makeArray(itemVal);
	});

	
	//Removes Item
	/*$(".removeItem").click(removeEntry);
	*/

	//Add Info Handler
	$('button[id="addButton"]').on('click', itemStorage);

	function itemStorage(itemVal){

		$.map(itemList, function(itemVal) {
			console.log(itemList);
			$("#list-items").html("<li><span class='removeItem'>X</span>" + itemList + "</li>");
		});
			
	};
	
	/*
	function removeEntry(itemVal, ItemList){		
		$(itemList).remove(this.ItemName)
		});
			
	};*/

});