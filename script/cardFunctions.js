import {
	titleInput,
	urlInput,
	cardsContainer,
	cardFormModalWindow,
} from "./utils.js";
import PopupManager from './events.js'; 
import Card from "./Card.js";

const popupManager = new PopupManager(cardFormModalWindow);

export function addPlace(item) {
	item.preventDefault();
	const newCardData = {
		name: titleInput.value,
		link: urlInput.value,
	};
	const cardInstance = new Card(newCardData, "#card-template");
	const newCardElement = cardInstance.generateCard();
	cardsContainer.prepend(newCardElement);
	popupManager.hidePopup();
	titleInput.value = "";
	urlInput.value = "";
}
