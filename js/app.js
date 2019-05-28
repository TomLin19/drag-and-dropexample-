(() =>{
	//stub
	console.log('fired!');
     // variables at the top
	let headline = document.querySelector("h1"),
	    subhead = document.querySelector("h3");

     // function in the middle (what do you want to have happen)
	function changeText(){
		headline.textContent = "Now I'm different!";
		subhead.textContent = "hey me too,but that's ok.";

	}

	//changeText();
	theButton.addEventListener("Click", changeText);
})();