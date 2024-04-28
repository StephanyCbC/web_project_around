import { handleEscPress, imagePopup } from "../utils/utils.js";

export default class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const template = document.querySelector(this._templateSelector);
    const templateNode = template.content.querySelector(".element");
    const cardNode = templateNode.cloneNode(true);

    cardNode.querySelector(".element__image").src = this._link;
    cardNode.querySelector(".element__image").alt = "Imagen de " + this._name;
    cardNode.querySelector(".element__text").textContent = this._name;
    cardNode
      .querySelector(".element__button-trash")
      .addEventListener("click", () => {
        cardNode.remove();
      });

    return cardNode;
  }

  _setEventListeners(cardNode) {
    const likeButton = cardNode.querySelector(".element__button-like");

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("element__button-like_active");
    });

    cardNode.querySelector(".element__image").addEventListener("click", () => {
      imagePopup.classList.add("popup_open");
      document.addEventListener("keydown", handleEscPress);
      imagePopup.querySelector(".popup__image").src = this._link;
      imagePopup.querySelector(".popup__title").textContent = this._name;
      imagePopup.querySelector(".popup__image").alt = this._name;
    });
  }

  render() {
    const node = this._getTemplate();
    this._setEventListeners(node);
    return node;
  }
}