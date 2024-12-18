'use strict'
const indexNumberInput = document.getElementById("index-number"); 
		const passwordInput = document.getElementById("password"); 
		const signInBtn = document.querySelector(".input-submit"); 

		const defaultPassword = "Pa55@GCTU"; 

		signInBtn.addEventListener("click", (e) => {
			// TODO: Check if index number is only number 
			e.preventDefault(); 
			const indexNumber = indexNumberInput.value.trim(); 
			const userPassword = passwordInput.value; 
			if(indexNumber.length != 10){
				alert("Enter a valid Index Number"); 
				return; 
			}
			if(userPassword != defaultPassword) {
				alert("Enter the correct password");
				return;  
			}
			if (!/^\d+$/.test(indexNumber)) {
				alert("Index Number should only contain numbers");
				return;
			}
			window.location.href = "shop.html"; 


		}); 
