export default class PopupManager {
	constructor(popupElement) {
		this._popupElement = popupElement;
	}

	showPopup() {
		this._popupElement.classList.add("popup_active");
	}

	hidePopup() {
		this._popupElement.classList.remove("popup_active");
		document.removeEventListener("keydown", function (event) {});
	}
}

export function initializePopupEvents() {
	document.addEventListener("DOMContentLoaded", function () {
		const popups = document.querySelectorAll(".popup");
		const popupManagers = Array.from(popups).map(
			(popup) => new PopupManager(popup)
		);

		popups.forEach(function (popup, index) {
			popup.addEventListener("click", function (event) {
				if (event.target.classList.contains("popup")) {
					popupManagers[index].hidePopup();
				}
			});
		});

		const closeButtons = document.querySelectorAll(".popup__button_type-close");

		closeButtons.forEach(function (button, index) {
			button.addEventListener("click", function () {
				popupManagers[index].hidePopup();
			});
		});

		document.addEventListener("keydown", function (event) {
			if (event.key === "Escape") {
				popupManagers.forEach(function (popupManager) {
					popupManager.hidePopup();
				});
			}
		});
	});
}
