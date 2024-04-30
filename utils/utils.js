import Card from "../utils/Card.js";

export const openEditButton = document.querySelector("#editbutton");
export const openProfileButton = document.querySelector("#addbutton");
export const popupProfile = document.querySelector(".popup_profile");
export const popupPlace = document.querySelector(".popup_place");
export const popupCloseIcon = document.querySelectorAll(".popup__close-icon");
export const formElement = document.querySelector(".popup__content");

export const profileText = document.querySelector(".profile__text");
export const profileTitle = document.querySelector(".profile__title");

export const nameInput = formElement.querySelector(".popup__input-name");
export const aboutMeInput = formElement.querySelector(".popup__input-about");

export const placeInput = popupPlace.querySelector(".popup__input-place");
export const linkInput = popupPlace.querySelector(".popup__input-link");

export const elementsArea = document.querySelector(".elements");

export const deleteCard = document.querySelector(".element__button-trash");

export const imagePopup = document.querySelector("#image-popup");

export const popupOverlays = document.querySelectorAll(".popup__overlay");

export const initialCards = [
  {
    name: "La Merced",
    link: "https://images.unsplash.com/photo-1541637593725-923467404d17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lago Lomond",
    link: "https://images.unsplash.com/photo-1609511400549-b49b69d5a0ca?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lago Braies",
    link: "https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Grand Teton",
    link: "https://images.unsplash.com/photo-1594717527389-a590b56e8d0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cataratas del Niagara",
    link: "https://images.unsplash.com/photo-1463695970743-ae65cca05743?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Agios Nikolaos",
    link: "https://images.unsplash.com/photo-1601836743857-4d1e6da20a32?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


export const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_has_error",
  errorClass: "popup__error",
};

export function closeAllModal() {
  popupProfile.classList.remove("popup_open");
  popupPlace.classList.remove("popup_open");
  imagePopup.classList.remove("popup_open");
  document.removeEventListener("keydown", handleEscPress);
}

export function handleEscPress(evt) {
  if (evt.key === "Escape") {
    closeAllModal();
  }
}

export function createCard(name, link) {
  return new Card(name, link, "#element-card").render();
}

export function handleAddCard(evt) {
  evt.preventDefault();
  const cardNode = createCard(placeInput.value, linkInput.value);
  elementsArea.prepend(cardNode);
  closeAllModal();

  placeInput.value = "";
  linkInput.value = "";
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileText.textContent = aboutMeInput.value;
  profileTitle.textContent = nameInput.value;
  closeAllModal();
}