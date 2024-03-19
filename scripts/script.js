const openEditButton = document.querySelector("#editbutton");
const openProfileButton = document.querySelector("#addbutton");
const popupProfile = document.querySelector(".popup_profile");
const popupPlace = document.querySelector(".popup_place");
const popupCloseIcon = document.querySelectorAll(".popup__close-icon");
const formElement = document.querySelector(".popup__container");

const profileText = document.querySelector(".profile__text");
const profileTitle = document.querySelector(".profile__title");

const nameInput = formElement.querySelector(".popup__input-name");
const aboutMeInput = formElement.querySelector(".popup__input-about");

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
  });
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileText.textContent = aboutMeInput.value;
  profileTitle.textContent = nameInput.value;
  popupProfile.classList.remove("popup_open");
}

formElement.addEventListener("submit", handleProfileFormSubmit);