let regExp;

const username = document.querySelector("#name");
const zipCode = document.querySelector("#zip");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

function validateName() {
	regExp = /^[a-zA-Z]{2,10}$/;

	if (!regExp.test(username.value)) {
		username.classList.add("is-invalid");
	} else {
		username.classList.remove("is-invalid");
	}
}

function validateZip() {
	// for U.S zipcode
	regExp = /^[0-9]{5}(-[0-9]{4})?$/;

	if (!regExp.test(zipCode.value)) {
		zipCode.classList.add("is-invalid");
	} else {
		zipCode.classList.remove("is-invalid");
	}
}

function validateEmail() {
	regExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	if (!regExp.test(email.value)) {
		email.classList.add("is-invalid");
	} else {
		email.classList.remove("is-invalid");
	}
}

function validatePhone() {
	// Ex: 5555555555 | 555.555.5555 | 555-555-5555 | 555 555 5555 | (555) 555 5555, etc.
	regExp = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

	if (!regExp.test(phone.value)) {
		phone.classList.add("is-invalid");
	} else {
		phone.classList.remove("is-invalid");
	}
}

// form's blur event listeners
username.addEventListener("blur", validateName);
zipCode.addEventListener("blur", validateZip);
email.addEventListener("blur", validateEmail);
phone.addEventListener("blur", validatePhone);
