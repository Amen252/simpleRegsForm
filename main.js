const form = document.querySelector("#registration");

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  const userName =  document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#Password").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;

  const error = document.querySelector("#error");
  
  error.textContent = ''; 
// checking userName
  if(userName === ""){
    error.textContent = "userName is required!!"
    return
  }   

  // checking email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.match(emailPattern)){
    error.textContent = "Please enter a valid email address !"
    return
  }

  if(password.length < 8){
    error.textContent = "password must be at least 8 character"
    return
  }
   

  if(password !== confirmPassword)
  {
    error.textContent = "password do not much !"
    return
  }




  error.textContent = 'Registration successful..'
})


console.log("hello world");

