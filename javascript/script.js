function submit() 
{
   var lname = document.forms["SignUp"]["first_name_field"].value;
   var email = document.forms["SignUp"]["email"].value;
   
   if (name == "")
	{
		
		alert('Please enter your name');
		return false;
	}
   else if (email == "")
	{
		alert('Please enter your Email');
		return false;
	}
   else
   {
      
   alert("Thank you for signing up, we look forward to seeing you!");
   }
   
   return true;
}
