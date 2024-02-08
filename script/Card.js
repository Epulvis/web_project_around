import {popupImages, cardsContainer, data } from "./utils.js";
import PopupManager from './events.js'; 

const popupManager = new PopupManager(popupImages);

export default class Card {
	constructor(data, templateSelector) {
		this._data = data;
		this._templateSelector = templateSelector;
	}

	_getTemplate() {
		const cardTemplate = document.querySelector(this._templateSelector);
		const templateContent = cardTemplate.content.cloneNode(true);
		return templateContent;
	}

	_setEventListeners() {
		const likeButton = this._element.querySelector(".card__button_type-like");
		const cardDeleteBtn = this._element.querySelector(".card__button_type-delete");
		const imgElement = this._element.querySelector(".card__image");

		likeButton.addEventListener("click", () => {
			likeButton.classList.toggle("card__button_type-like_active");
		});

		cardDeleteBtn.addEventListener("click", () => {
			const listItem = cardDeleteBtn.closest(".card");
			listItem.remove();
		});

		imgElement.addEventListener("click", () => {
			const popupPhoto = popupImages.querySelector(".popup__image");
			const popupPhotoTitle = popupImages.querySelector(".popup__image-title");

			popupPhoto.src = this._data.link;
			popupPhotoTitle.textContent = this._data.name;

            popupManager.showPopup();
		});
	}

	_closePopupUsingEscButton(evt) {
		if (evt.key === "Escape") {
			popupManager.hidePopup();
		}
	}

	generateCard() {
		this._element = this._getTemplate();
		const imgElement = this._element.querySelector(".card__image");
		const titleElement = this._element.querySelector(".card__title");

		imgElement.src = this._data.link;
		imgElement.alt = this._data.name;
		titleElement.textContent = this._data.name;

		this._setEventListeners();

		return this._element;
	}
}

data.forEach((item) => {
	const cardInstance = new Card(item, "#card-template");
	const populatedTemplate = cardInstance.generateCard();
	cardsContainer.appendChild(populatedTemplate);
});
