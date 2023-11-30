const editBtn = document.querySelector('.profile__button_type-edit');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__button_type-close');
const formInput = document.querySelector('.popup__form');
const nameInput = document.getElementById('form-profile-username-input');
const jobInput = document.getElementById('form-profile-job-input');
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__job');

formInput.addEventListener('submit', evt => {
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
