import { editBtn, formInput, nameInput, jobInput, nameValue, jobValue, newCardBtn, newCardForm, popup, editFormModalWindow, cardFormModalWindow, data, cardsContainer } from "./utils.js";
import FormValidator from "./FormValidator.js";
import PopupManager, {
  initializePopupEvents,
  closePopupUsingEscButton,
} from './events.js'; 
import { addPlace } from "./cardFunctions.js";

// Elements
const popupManager = new PopupManager(popup);

// Validation settings
const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button_type-submit",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

// Validators
const editFormValidator = new FormValidator(enableValidation, editFormModalWindow);
const addFormValidator = new FormValidator(enableValidation, cardFormModalWindow);

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
  document.addEventListener('keydown', closePopupUsingEscButton)
}

// Initialize Validators
editFormValidator.enableValidation();
addFormValidator.enableValidation();

// Initialize Popup Events
initializePopupEvents()

// Event Listeners
formInput.addEventListener("submit", handleFormSubmit);
editBtn.addEventListener("click", handleEditButtonClick);
newCardBtn.addEventListener("click", handleNewCardButtonClick);

newCardForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addPlace(event);
});