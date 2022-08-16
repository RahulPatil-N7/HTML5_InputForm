/*
*UC 1 -First name validation, First name starts with Cap and has minimum 3 characters
*/
const text =  document.querySelector('#text');
const textError =  document.querySelector('.text-error');
text.addEventListener('input',function(){
	let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
	if(firstNameRegex.test(text.value))
	textError.textContent = "";
	else textError.textContent = "First Name is Incorrect!";
});
/*
*UC 2 -Email input validation 
*/
const email =  document.querySelector('#email');
const textError1 =  document.querySelector('.email-error');
email.addEventListener('input',function(){
	let emailIdRegex = RegExp('[a-z][a-z A-Z 0-9]+[@][a-z]+[.][a-z]{2,5}')
	if(emailIdRegex.test(email.value))
	textError1.textContent = "";
	else textError1.textContent = "Email Id is Incorrect!";
});
/*
*UC 3 -Phone number validation, country code followed by space & 10 digit number 
*/
const tel =  document.querySelector('#tel');
const textError2 =  document.querySelector('.tel-error');
tel.addEventListener('input',function(){
	let telRegex = RegExp('(0/91)?[7-9][0-9]{9}');
	if(telRegex.test(tel.value))
	textError2.textContent = "";
	else textError2.textContent = "Telphone Number is Incorrect!";
});
/*
*UC 4,5 -Password validation, minimum 8 characters, 1 uppercase, at least 1 numeric & 1 special character  
*/
const pwd =  document.querySelector('#pwd');
const textError3 =  document.querySelector('.pwd-error');
pwd.addEventListener('input',function(){
	let pwdRegex = RegExp('(?=.*[A-Z]){1,}(?=.*[a-z]){1,}(?=.*[0-9]){1,}(?=.*[@#$%^&-+=()]){1}[a-zA-Z0-9@#$%^&-+=()]{8,}');
	if(pwdRegex.test(pwd.value))
	textError3.textContent = "";
	else textError3.textContent = "Password is Incorrect!";
});

//Salary selector
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value; 
salary.addEventListener('input',function(){
	output.textContent = salary.value;
}); 
