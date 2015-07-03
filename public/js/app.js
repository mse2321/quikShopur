$(document).ready( function() {

	/*$("span[class='removeItem']").hide(); */

	/*$("#list-items").click(function(this){
		$("span[class='removeItem']").show(this);
	});*/
	
	$("#item").focusout(function(itemVal)	{
		itemVal = $('#item').val();
	$('#item').data('itemVal', itemVal);
		console.log(itemVal);
	});

	//Add Info Handler
	$('button[id="addButton"]').on('click', itemStorage);

	function itemStorage(itemVal){		
		//itemList = []
		itemName = $("#item").data('itemVal');

		$("#list-items").each(function() {
			$("#list-items").html("<li><span class='removeItem'>X</span>" + itemName + "</li>");
		});
			
	};

});