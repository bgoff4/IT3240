//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName;
	
	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipientNameInput").value;
	
	console.log('Variable myRecipientName: ' + myRecipientName);
	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
}

// Add event listener to the form submit button
document.getElementById("myForm").addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent the form from actually submitting
	replaceContent(); // Call the replaceContent function
});