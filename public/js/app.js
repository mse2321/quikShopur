$(document).ready( function() {

	/*$("span[class='removeItem']").hide(); */

	/*$("#list-items").click(function(this){
		$("span[class='removeItem']").show(this);
	});*/
	
	//Takes in input
	$("#item").focusout(function(itemVal)	{
		itemVal = $('#item').val();
	$('#item').data('itemVal', itemVal);
		console.log(itemVal);
	});

	//Removes Item
	$(".removeItem").click(removeEntry);

	//Add Info Handler
	$('button[id="addButton"]').on('click', itemStorage);

	function itemStorage(itemVal){		
		itemName = $("#item").data('itemVal');
		itemList = $.makeArray(itemName);

		$(itemList.length).each(function() {
			$("#list-items").html("<li><span class='removeItem'>X</span>" + itemList + "</li>");
			console.log(itemList);
		});
			
	};
	/*function removeEntry(itemName, ItemList){		
		$(itemList.length).each(function() {
			$("#list-items").html("<li><span class='removeItem'>X</span>" + itemList + "</li>");
			console.log(itemList);
		});
			
	};*/

});