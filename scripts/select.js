function populate(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "corn"){
		var optionArray = ["|","gmmn|Grain Millers, MN","gmin|Grain Millers, IN"];
	} else if(s1.value == "soybeans"){
		var optionArray = ["|","sunoptamn|Sun Opta, MN"];
	} else if(s1.value == "oats"){
		var optionArray = ["|","gmia|Grain Millers, St. Ansgar IA"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
};

function getPrice() {
	var crop = document.getElementById("s1").value;
	var location = document.getElementById("s2").value;
	var prices = {'corngmmn': '$8.75/bu', 'corngmin': '$8.75/bu', 'soybeanssunoptamn': '$16/bu', 'oatsgmnia': '$2.50/bu'};
	document.getElementById("price").innerHTML = 'Price: ' + prices[crop+location];
};