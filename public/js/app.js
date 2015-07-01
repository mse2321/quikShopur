$(document).ready( function() {

	$("span[class='removeItem']").hide();

	/*$("#list-items").click(function(this){
		$("span[class='removeItem']").show(this);
	});*/
		
	//Add Info Handler
	$('#addButton').on('tap', charInfoStorage);
			
	function charInfoStorage(){		
		var charName = $('#charName').val();
		$("#newTotalXp").html(totalCharXp);
		
		var charInfo = charName;
			
		var name = new Array();
			
		name.push(charInfo);
		
		// Set stringified object to localStorage
		localStorage.setItem('name',name);
		
		// Redirect
		window.location.href="index.html";		
		return false;
	}
	
	function clearInfo(){
		localStorage.clear();
		alert('Character Information Cleared');
		window.location.href="xpCalculator.html";
	}



});