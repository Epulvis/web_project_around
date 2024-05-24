class Card {
	constructor(data, templateSelector, handleCardClick) {
		this._name = data.name;
		this._link = data.link;
		this._templateSelector = templateSelector;
		this._handleCardClick = handleCardClick;
	}

	_getTemplate() {
		const cardElement = document
			.querySelector(this._templateSelector)
			.content.querySelector('.card')
			.cloneNode(true);

		return cardElement;
	}

	_setEventListeners() {
		this._element.querySelector('.card__image').addEventListener('click', () => {
			this._handleCardClick(this._name, this._link);
		});

		this._element.querySelector('.card__button_type-like').addEventListener('click', () => {
			this._handleLikeIcon();
		});

		this._element.querySelector('.card__button_type-delete').addEventListener('click', () => {
			this._handleDeleteCard();
		});
	}

	_handleLikeIcon() {
		this._element.querySelector('.card__button_type-like').classList.toggle("card__button_type-like_active");
	}

	_handleDeleteCard() {
		this._element.remove();
		this._element = null;
	}

	generateCard() {
		this._element = this._getTemplate();
		this._element.querySelector('.card__title').textContent = this._name;
		const imageElement = this._element.querySelector('.card__image');
		imageElement.src = this._link;
		imageElement.alt = this._name;

		this._setEventListeners();

		return this._element;
	}
}

export default Card;
