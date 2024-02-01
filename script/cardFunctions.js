import {
	cardTemplate,
	popupImages,
	titleInput,
	urlInput,
	cardsContainer,
	cardFormModalWindow,
} from "./utils.js";
import PopupManager from "./events.js";

const popupManager = new PopupManager(cardFormModalWindow);

export function populateCardTemplate(item) {
	const templateContent = cardTemplate.content.cloneNode(true);
	const imgElement = templateContent.querySelector(".card__image");
	imgElement.src = item.link;
	imgElement.alt = item.name;
	const titleElement = templateContent.querySelector(".card__title");
	titleElement.textContent = item.name;
	const likeButton = templateContent.querySelector(".card__button_type-like");
	if (likeButton) {
		likeButton.addEventListener("click", function (evt) {
			likeButton.classList.toggle("card__button_type-like_active");
		});
	}

	const cardDeleteBtn = templateContent.querySelector(
		".card__button_type-delete"
	);
	cardDeleteBtn.addEventListener("click", () => {
		const listItem = cardDeleteBtn.closest(".card");
		listItem.remove();
	});

	imgElement.addEventListener("click", () => {
		const popupPhoto = popupImages.querySelector(".popup__image");
		const popupPhotoTitle = popupImages.querySelector(".popup__image-title");

		popupPhoto.src = item.link;
		popupPhotoTitle.textContent = item.name;

		popupImages.classList.add("popup_active");
	});

	return templateContent;
}

export function addPlace(item) {
	item.preventDefault();
	const newCardData = {
		name: titleInput.value,
		link: urlInput.value,
	};

	const newCardElement = populateCardTemplate(newCardData);
	cardsContainer.prepend(newCardElement);
	popupManager.hidePopup();

	titleInput.value = "";
	urlInput.value = "";
}
