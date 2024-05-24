class Popup {
	constructor(popupSelector) {
		this._popupElement = document.querySelector(popupSelector);
		this._handleEscClose = this._handleEscClose.bind(this);
	}

	open() {
		this._popupElement.classList.add("popup_active");
		document.addEventListener("keydown", this._handleEscClose);
	}

	close() {
		this._popupElement.classList.remove("popup_active");
		document.removeEventListener("keydown", this._handleEscClose);
	}

	_handleEscClose(event) {
		if (event.key === "Escape") {
			this.close();
		}
	}

	setEventListeners() {
		this._popupElement.addEventListener("click", (event) => {
			if (event.target.classList.contains("popup") || event.target.classList.contains("popup__button_type-close")) {
				this.close();
			}
		});
	}
}

export default Popup;

