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
const cardsContainer = document.querySelector(".cards__container");
const popupManager = new PopupManager(popup);
const popupAddPlace = new PopupManager(cardFormModalWindow);

function addPlace(item) {
	item.preventDefault();
	const newCardData = {
		name: titleInput.value,
		link: urlInput.value,
	};
	const cardInstance = new Card(newCardData, "#card-template");
	const newCardElement = cardInstance.generateCard();
	cardsContainer.prepend(newCardElement);
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