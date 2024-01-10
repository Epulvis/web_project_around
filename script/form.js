export function initializeForm() {
  
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
  
  }
  