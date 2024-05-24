import Popup from "./popup.js";

class PopupWithForm extends Popup {
	constructor(popupSelector, handleFormSubmit) {
		super(popupSelector);
		this._handleFormSubmit = handleFormSubmit;
		this._formElement = this._popupElement.querySelector(".popup__form");
		this._inputList = this._formElement.querySelectorAll(".popup__form-input");
	}

	_getInputValues() {
		const formValues = {};
		this._inputList.forEach(input => {
			formValues[input.name] = input.value;
		});
		return formValues;
	}

	setEventListeners() {
		super.setEventListeners();
		this._formElement.addEventListener("submit", (event) => {
			event.preventDefault();
			this._handleFormSubmit(this._getInputValues());
		});
	}

	close() {
		super.close();
		this._formElement.reset();
	}
}

export default PopupWithForm;
