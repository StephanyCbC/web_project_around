import FormValidator from "../components/FormValidator.js";
import {
  createCard,
  openEditButton,
  openProfileButton,
  popupCloseIcon,
  formElement,
  elementsArea,
  profileText,
  profileTitle,
  popupPlace,
  initialCards,
  popupOverlays,
  closeAllModal,
  handleAddCard,
  handleProfileFormSubmit,
  formConfig,
  popupProfile,
  handleEscPress,
  aboutMeInput,
  nameInput,
} from "../utils/utils.js";

const formValidatorProfile = new FormValidator(formElement, formConfig);
const formValidatorAddCard = new FormValidator(popupPlace, formConfig);

openEditButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_open");
  document.addEventListener("keydown", handleEscPress);
});

openProfileButton.addEventListener("click", function () {
  popupPlace.classList.add("popup_open");
  document.addEventListener("keydown", handleEscPress);
  aboutMeInput.value = profileText.textContent;
  nameInput.value = profileTitle.textContent;
});

popupCloseIcon.forEach((item) => {
  item.addEventListener("click", function () {
    closeAllModal();
  });
});

formElement.addEventListener("submit", handleProfileFormSubmit);

popupPlace.addEventListener("submit", handleAddCard);

initialCards.forEach((item) => {
  const cardNode = createCard(item.name, item.link);
  elementsArea.append(cardNode);
});

popupOverlays.forEach((overlay) => {
  overlay.addEventListener("click", closeAllModal);
});

formValidatorProfile.enableValidation();
formValidatorAddCard.enableValidation();