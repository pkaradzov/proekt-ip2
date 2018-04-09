
function login(){
	var users;
	var usersInDB, data;
	users = JSON.parse("scripts/users.json");

	console.log(users);
	var userInput = document.getElementById("userInput").value;
	var passwordInput = document.getElementById("passwordInput").value;

	//for (var i = 0; i < users1.length; i++){
		//if (users1[i].user == userInput && users1[i].password == passwordInput){
			//userInDB = 1;
		//}
	//}

	//console.log(data[0].username);
	/*if (userInput == "" || passwordInput == ""){
		alert("Грешка! Сите полиња мора да бидат пополнети!");
	}
	else {

		if (usersInDB == 1){
			console.log("SUCCESS!");
		}
		else {
			alert("Неуспешна авторизација! Обидете се повторно!");
			userInput.innerHTML = "";
			passwordInput.innerHTML = "";
		}
	}*/
};
