//finds all the <span>'s that expand text
var hooks = document.getElementsByClassName('hook');
var tabs = document.getElementsByClassName('tab');
var line;

//adds click events to them all
for (var i = 0; i < hooks.length; i++) {
	hooks[i].addEventListener("click", function() {
		
		line = document.getElementById(this.dataset.ref);
		//toggles the 'hidden' class on the text asccociated with the hook
		if (line.className == "line closed") {
			line.className = "line open";
		} else {
			line.className = "line closed";
		};
		
		//logs recources
		if (this.dataset.used == undefined) {
			for (var y = 0; y < line.children.length; y++) {
				if (line.children[y].tagName == "A") {
					document.getElementById("links").innerHTML = document.getElementById("links").innerHTML + "<li><a href='" + line.children[y].href + "'>" + line.children[y].innerHTML + "</a></li>"
				}
			}
			this.dataset.used = "yes";
		}
	} );
}


//add functionality to article/twitter tabs
for (var x = 0; x < 2; x++) {
	tabs[x].addEventListener("click", function() {
		tabs[0].className = "tab";
		tabs[1].className = "tab";
		this.className = "selected tab";
		if (this.innerHTML == 'Article') {
			document.getElementById('timeline').className = " ";
			document.getElementById('twitter').className = "closedTab";
		} else if (this.innerHTML == 'Twitter') {
			document.getElementById('timeline').className = "closedTab";
			document.getElementById('twitter').className = " ";
		}
	} );
}

//expands by url
var place = window.location.hash;
var first = true;

if (place.charAt(0) === '#') {
	place = place.substr(1);

	//Lopp that expands the targeted element and its parents
	while (place.length > 1) {
		
		line = document.getElementById(place);
		
		if (first == true) {
				line.style.backgroundColor = "#171d24"; 
		}
		
		//toggles the 'hidden' class on the text asccociated with the hook
		if (line.className == "line closed") {
			line.className = "line open";
		} else {
			line.className = "line closed";
		};
		
		//logs recources
		for (var y = 0; y < line.children.length; y++) {
			if (line.children[y].tagName == "A") {
				document.getElementById("links").innerHTML = document.getElementById("links").innerHTML + "<li><a href='" + line.children[y].href + "'>" + line.children[y].innerHTML + "</a></li>"
			}
		}
		
		line.dataset.used = "yes";
		first = false;
		
		place = place.substr(0, place.length-2);
	}
}

if (document.getElementById(window.location.hash) != null) {
	var scrollPos = document.getElementById(window.location.hash.substr(1)).offsetTop;
	
	scrollTo(0, window.innerHeight/2);
};


//about popup
var about = document.getElementById("about");

document.getElementById("aboutbtn").addEventListener("click", function() {
	about.className = " ";
});

document.getElementById("aboutclose").addEventListener("click", function() {
	about.className = "hidden";
});

$('#backToTop').click(function () {
	$("html, body").animate({
		scrollTop: 0
	}, 200);
	
	return false;
});
