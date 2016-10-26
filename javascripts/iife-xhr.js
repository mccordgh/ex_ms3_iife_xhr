function showAnimalList (title, arrList) {
	document.write("<h1>" + title + "</h1><br>");
	arrList.forEach( function(item) {
		document.write(item + "<br>");
	});
}


Predator.loadCarnivores(showAnimalList);
document.write("<hr>");
Predator.loadHerbivores(showAnimalList);