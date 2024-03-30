const openEditButton = document.querySelector("#editbutton");
const openProfileButton = document.querySelector("#addbutton");
const popupProfile = document.querySelector(".popup_profile");
const popupPlace = document.querySelector(".popup_place");
const popupCloseIcon = document.querySelectorAll(".popup__close-icon");
const formElement = document.querySelector(".popup__content");

const profileText = document.querySelector(".profile__text");
const profileTitle = document.querySelector(".profile__title");

const nameInput = formElement.querySelector(".popup__input-name");
const aboutMeInput = formElement.querySelector(".popup__input-about");

const placeInput = popupPlace.querySelector(".popup__input-place");
const linkInput = popupPlace.querySelector(".popup__input-link");

const elementsArea = document.querySelector(".elements");

const deleteCard = document.querySelector(".element__button-trash");

const imagePopup = document.querySelector("#image-popup");

const initialCards = [
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

openEditButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_open");
});

openProfileButton.addEventListener("click", function () {
  popupPlace.classList.add("popup_open");
  aboutMeInput.value = profileText.textContent;
  nameInput.value = profileTitle.textContent;
});

popupCloseIcon.forEach((item) => {
  item.addEventListener("click", function () {
    popupProfile.classList.remove("popup_open");
    popupPlace.classList.remove("popup_open");
    imagePopup.classList.remove("popup_open");
  });
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileText.textContent = aboutMeInput.value;
  profileTitle.textContent = nameInput.value;
  popupProfile.classList.remove("popup_open");
}

formElement.addEventListener("submit", handleProfileFormSubmit);

function handleAddCard(evt) {
  evt.preventDefault();
  const cardNode = createCard(placeInput.value, linkInput.value);
  elementsArea.prepend(cardNode);
  popupPlace.classList.remove("popup_open");

  placeInput.value = "";
  linkInput.value = "";
}

popupPlace.addEventListener("submit", handleAddCard);

function createCard(name, link) {
  const template = document.querySelector("#element-card");
  const templateNode = template.content.querySelector(".element");
  const cardNode = templateNode.cloneNode(true);

  cardNode.querySelector(".element__image").src = link;
  cardNode.querySelector(".element__image").alt = "Imagen de " + name;
  cardNode.querySelector(".element__text").textContent = name;

  cardNode
    .querySelector(".element__button-trash")
    .addEventListener("click", () => {
      cardNode.remove();
    });

  const likeButton = cardNode.querySelector(".element__button-like");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("element__button-like_active");
  });

  cardNode.querySelector(".element__image").addEventListener("click", () => {
    imagePopup.classList.add("popup_open");
    imagePopup.querySelector(".popup__image").src = link;
    imagePopup.querySelector(".popup__title").textContent = name;
    imagePopup.querySelector(".popup__image").alt = name;
  });

  return cardNode;
}

initialCards.forEach((item) => {
  const cardNode = createCard(item.name, item.link);
  elementsArea.append(cardNode);
});