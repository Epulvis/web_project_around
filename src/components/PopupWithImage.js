import Popup from "./popup.js";

class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._imageElement = this._popupElement.querySelector(".popup__image");
		this._captionElement = this._popupElement.querySelector(".popup__image-title");
	}

	open({ link, name }) {
		this._imageElement.src = link;
		this._imageElement.alt = name;
		this._captionElement.textContent = name;
		super.open();
	}
}

export default PopupWithImage;
