function formReset(){
  document.forms["myForm"]["firstname"].value = ""
	document.forms["myForm"]["lastname"].value = ""
	document.forms["myForm"]["emailaddress"].value = ""
	document.forms["myForm"]["password"].value = ""
}

function validateForm(){
	let firstname = document.forms["myForm"]["firstname"].value
	let lastname = document.forms["myForm"]["lastname"].value
	let email = document.forms["myForm"]["emailaddress"].value
	let password = document.forms["myForm"]["password"].value

	if (firstname.length < 1) {
    document.querySelector(".first").classList.add("error")
    document.querySelector(".first").title='First Name'
    document.querySelector(".firstField").classList.add("errorField")
    document.querySelector(".warningFirst").style.display="flex"
  } else {
    document.querySelector(".first").classList.remove("error")
    document.querySelector(".first").title=''
    document.querySelector(".firstField").classList.remove("errorField")
    document.querySelector(".warningFirst").style.display="none"
  }

  if (lastname.length<1) {  
    document.querySelector(".last").classList.add("error")
    document.querySelector(".last").title='Last Name'
    document.querySelector(".lastField").classList.add("errorField")
    document.querySelector(".warningLast").style.display="flex"
  } else {
    document.querySelector(".last").classList.remove("error")
    document.querySelector(".last").title=''
    document.querySelector(".lastField").classList.remove("errorField")
    document.querySelector(".warningLast").style.display="none"
  }

  if (email.length<1) {
    document.querySelector(".email").classList.add("error")
    document.querySelector(".email").title='Email'
    document.querySelector(".emailField").classList.add("errorField")
    document.querySelector(".warningEmail").style.display="flex"
  } else {
    document.querySelector(".email").classList.remove("error")
    document.querySelector(".email").title=''
    document.querySelector(".emailField").classList.remove("errorField")
    document.querySelector(".warningEmail").style.display="none"
  }


  if (password.length<1) {
    document.querySelector(".password").classList.add("error")
    document.querySelector(".password").title='Password'
    document.querySelector(".passwordField").classList.add("errorField")
    document.querySelector(".warningPassword").style.display="flex"
  } else {
    document.querySelector(".password").classList.remove("error")
    document.querySelector(".password").title=''
    document.querySelector(".passwordField").classList.remove("errorField")
    document.querySelector(".warningPassword").style.display="none"
  }

  if(firstname.length<1 || lastname.length<1 || email.length<1 || password.length<1){
    return false
  } else {
    return true
  } 
}
