const editBtn = document.querySelector(".profile__button_type-edit");
const popup = document.querySelector(".popup");
const newPlace = document.querySelector(".new-place");
const popupImages = document.querySelector(".popup-image");
const closeImageBtn = document.getElementById("closeImage");
const formInput = document.querySelector(".popup__form");
const nameInput = document.getElementById("form-profile-username-input");
const jobInput = document.getElementById("form-profile-job-input");
const nameValue = document.querySelector(".profile__name");
const jobValue = document.querySelector(".profile__job");
const cardTemplate = document.getElementById("card-template");
const cardsContainer = document.querySelector(".cards__container");
const newCardBtn = document.querySelector(".profile__button_type-add");
const closeEditProfileBtn = document.getElementById("closeEditProfile");
const closeNewPlaceBtn = document.getElementById("closeNewPlace");
const newCardForm = document.querySelector(".popup__form_add-card");
const titleInput = document.querySelector(".popup__form-input_card-title");
const urlInput = document.querySelector(".popup__form-input_type-url");

formInput.addEventListener("submit", (evt) => {
	evt.preventDefault();

	nameValue.textContent = nameInput.value;
	jobValue.textContent = jobInput.value;

	popup.classList.remove("popup_active");
});

editBtn.addEventListener("click", () => {
	nameInput.value = nameValue.textContent;
	jobInput.value = jobValue.textContent;
	popup.classList.add("popup_active");
});

newCardBtn.addEventListener("click", () => {
	newPlace.classList.add("popup_active");
});

function closePopup(popupElement) {
	popupElement.classList.remove("popup_active");
}

closeEditProfileBtn.addEventListener("click", () => {
	closePopup(popup);
});

closeNewPlaceBtn.addEventListener("click", () => {
	closePopup(newPlace);
});

closeImageBtn.addEventListener("click", () => {
	closePopup(popupImages);
});

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

function populateCardTemplate(item) {
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

	const cardDeleteBtn = templateContent.querySelector('.card__button_type-delete');
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

data.forEach((item) => {
	const populatedTemplate = populateCardTemplate(item);
	cardsContainer.appendChild(populatedTemplate);
});

function addPlace(item) {
	item.preventDefault();
	const newCardData = {
		name: titleInput.value,
		link: urlInput.value,
	};

	const newCardElement = populateCardTemplate(newCardData);
	cardsContainer.prepend(newCardElement);
	closePopup(newPlace);
}

newCardForm.addEventListener("submit", addPlace);
