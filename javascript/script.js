function SubmitNotify() {
   var checkEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

  if (checkEmail.test(email.value)) {
    alert('Thank You for Signing up, We look forward to seeing you!')
  } else {
    alert("Please enter a valid email address")
}
  //end execution
};
