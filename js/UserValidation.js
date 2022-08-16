/*
*UC 1 -First name validation First name starts with Cap and has minimum 3 characters
*/
const text =  document.querySelector('#text');
const textError =  document.querySelector('.text-error');
text.addEventListener('input',function(){
	let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
	if(firstNameRegex.test(text.value))
	textError.textContent = "";
	else textError.textContent = "First Name is Incorrect!";
});

//Salary selector
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value; 
salary.addEventListener('input',function(){
	output.textContent = salary.value;
}); 
