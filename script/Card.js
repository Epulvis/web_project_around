import PopupManager from './utils.js'; 
const cardsContainer = document.querySelector(".cards__container");
const popupImages = document.querySelector(".popup-image");
const popupManager = new PopupManager(popupImages);

const data = [
	{
		name: "Lembah Yosemite",
		link:
			"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
	},
	{
		name: "Danau Louise",
		link:
			"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
	},
	{
		name: "Pegunungan Gundul",
		link:
			"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
	},
	{
		name: "Gunung Latemar",
		link:
			"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
	},
	{
		name: "Taman Nasional Vanoise",
		link:
			"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
	},
	{
		name: "Lago di Braies",
		link:
			"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
	},
];

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
