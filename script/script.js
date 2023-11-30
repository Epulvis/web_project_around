const editBtn = document.querySelector(".profile__button_type-edit");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".popup__button_type-close");
const formInput = document.querySelector(".popup__form");
const nameInput = document.getElementById("form-profile-username-input");
const jobInput = document.getElementById("form-profile-job-input");
const nameValue = document.querySelector(".profile__name");
const jobValue = document.querySelector(".profile__job");
const cardTemplate = document.getElementById('card-template');
const cardsContainer = document.querySelector('.cards__container');
 

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

closeBtn.addEventListener("click", () => {
	popup.classList.remove("popup_active");
});

const data = [
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

  return templateContent;
}


data.forEach((item) => {
	const populatedTemplate = populateCardTemplate(item);
	cardsContainer.appendChild(populatedTemplate);
});
