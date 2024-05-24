import '../pages/index.css';
import Section from "../components/section.js"; 
import FormValidator from "./FormValidator.js";
import PopupManager, {
	initializePopupEvents,
	closePopupUsingEscButton,
} from "./utils.js";
import Card from "./Card.js";

// Elements
const editBtn = document.querySelector(".profile__button_type-edit");
const formInput = document.querySelector(".popup__form");
const nameInput = document.getElementById("form-profile-username-input");
const jobInput = document.getElementById("form-profile-job-input");
const nameValue = document.querySelector(".profile__name");
const jobValue = document.querySelector(".profile__job");
const newCardBtn = document.querySelector(".profile__button_type-add");
const newCardForm = document.querySelector(".popup__form_add-card");
const popup = document.querySelector(".popup");
const editFormModalWindow = document.querySelector(".edit-Profile");
const cardFormModalWindow = document.querySelector(".new-place");
const titleInput = document.querySelector(".popup__form-input_card-title");
const urlInput = document.querySelector(".popup__form-input_type-url");
const cardsContainerSelector = ".cards__container";
const popupManager = new PopupManager(popup);
const popupAddPlace = new PopupManager(cardFormModalWindow);

// Create a renderer function for the Section class
const renderCard = (item) => {
	const cardInstance = new Card(item, "#card-template");
	const newCardElement = cardInstance.generateCard();
	section.addItem(newCardElement);  // Use Section class's addItem method
};

// Initialize Section with card data and renderer function
const section = new Section({
	items: [
		{
			name: "Lembah Yosemite",
			link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
		},
		{
			name: "Danau Louise",
			link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
		},
		{
			name: "Pegunungan Gundul",
			link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
		},
		{
			name: "Gunung Latemar",
			link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
		},
		{
			name: "Taman Nasional Vanoise",
			link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
		},
		{
			name: "Lago di Braies",
			link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
		},
	],
	renderer: renderCard
}, cardsContainerSelector);

// Render initial items
section.renderItems();


function addPlace(event) {
	event.preventDefault();
	const newCardData = {
		name: titleInput.value,
		link: urlInput.value,
	};
	renderCard(newCardData);
	popupAddPlace.hidePopup();
	titleInput.value = "";
	urlInput.value = "";
}

// Validation settings
const validationSelectors = {
	formSelector: ".popup__form",
	inputSelector: ".popup__form-input",
	submitButtonSelector: ".popup__button_type-submit",
	inactiveButtonClass: "popup__button_inactive",
	inputErrorClass: "form__input_type_error",
	errorClass: "form__input-error_active",
};

// Validators
const editFormValidator = new FormValidator(
	validationSelectors,
	editFormModalWindow
);
const addFormValidator = new FormValidator(
	validationSelectors,
	cardFormModalWindow
);

// Functions
function handleFormSubmit(event) {
	event.preventDefault();
	nameValue.textContent = nameInput.value;
	jobValue.textContent = jobInput.value;
	popupManager.hidePopup();
}

function handleEditButtonClick() {
	nameInput.value = nameValue.textContent;
	jobInput.value = jobValue.textContent;
	popupManager.showPopup();
}

function handleNewCardButtonClick() {
	cardFormModalWindow.classList.add("popup_active");
	document.addEventListener("keydown", closePopupUsingEscButton);
}

// Initialize Validators
editFormValidator.enableValidation();
addFormValidator.enableValidation();

// Initialize Popup Events
initializePopupEvents();

// Event Listeners
formInput.addEventListener("submit", handleFormSubmit);
editBtn.addEventListener("click", handleEditButtonClick);
newCardBtn.addEventListener("click", handleNewCardButtonClick);

newCardForm.addEventListener("submit", function (event) {
	event.preventDefault();
	addPlace(event);
});