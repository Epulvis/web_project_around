class FormValidator {
	constructor(settings, formElement) {
	  this._inputSelector = settings.inputSelector;
	  this._submitButtonSelector = settings.submitButtonSelector;
	  this._inactiveButtonClass = settings.inactiveButtonClass;
	  this._inputErrorClass = settings.inputErrorClass;
	  this._errorClass = settings.errorClass;
	  this._form = formElement;
  
	  this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
	  this._button = this._form.querySelector(this._submitButtonSelector);
	}
  
	_showErrorMessage(input) {
	  const error = input.nextElementSibling;
	  if (error.classList.contains("popup__form-error")) {
		error.textContent = input.validationMessage;
		error.classList.add(this._errorClass);
		input.classList.add(this._inputErrorClass);
	  }
	}
  
	_hideErrorMessage(input) {
	  const error = input.nextElementSibling;
	  if (error.classList.contains("popup__form-error")) {
		error.textContent = "";
		error.classList.remove(this._errorClass);
		input.classList.remove(this._inputErrorClass);
	  }
	}
  
	_toggleButtonState() {
	  const isValid = this._inputs.every((input) => input.validity.valid);
	  this._button.classList.toggle(this._inactiveButtonClass, !isValid);
	  this._button.disabled = !isValid;
	}
  
	_checkInputValidity(input) {
	  input.validity.valid ? this._hideErrorMessage(input) : this._showErrorMessage(input);
	}
  
	_handleInput = (input) => {
	  this._checkInputValidity(input);
	  this._toggleButtonState();
	};
  
	enableValidation() {
	  this._form.addEventListener("submit", (e) => e.preventDefault());
	  this._inputs.forEach((input) => input.addEventListener("input", () => this._handleInput(input)));
	}
  }
  
  export default FormValidator;
  