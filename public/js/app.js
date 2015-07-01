$(document).ready( function() {

	$("span[class='removeItem']").hide();

	/*$("#list-items").click(function(this){
		$("span[class='removeItem']").show(this);
	});*/
		
	//Add Info Handler
	$('#submit').on('tap', charInfoStorage);
			
	function charInfoStorage(totalXp){		
		var charName = $('#charName').val();
		var charLevel = parseInt($('#charLevel').val());
		var totalCharXp = totalXp;
		$("#newTotalXp").html(totalCharXp);
		
		var charInfo = charName;
		var charInfo2 = totalCharXp;
		var charInfo3 = charLevel;
			
		var name = new Array();
		var xp = new Array();
		var level = new Array();
			
		name.push(charInfo);
		xp.push(charInfo2);
		level.push(charInfo3);
		
		// Set stringified object to localStorage
		localStorage.setItem('name',name);
		localStorage.setItem('xp',xp);
		localStorage.setItem('level',level);
		
		// Redirect
		window.location.href="xpCalculator.html";		
		return false;
	}
	
	function clearInfo(){
		localStorage.clear();
		alert('Character Information Cleared');
		window.location.href="xpCalculator.html";
	}



});