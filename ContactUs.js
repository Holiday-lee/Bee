
	document.getElementById ('contactForm').addEventListener('submit',function(event){
    
    event.preventDefault();

    // Get the values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('contact_number').value;
    var subject = document.getElementById('subject').value;
    var query = document.getElementById('query').value;

   
    if (name==="" || email==="" || contactNumber==="" ||subject=== "" || query=== "") {
        alert("Please fill in all required fields!");
    } else {
        
        alert("Thank you for your message, " + name + "! We will get back to you shortly.");

    }
});
