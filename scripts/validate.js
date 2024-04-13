function setEventListeners(form, formConfig) {
    const formInputs = Array.from(
      form.querySelectorAll(formConfig.inputSelector)
    );
    const submitButton = form.querySelector(formConfig.submitButtonSelector);
  
    formInputs.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        const errorNode = form.querySelector(
          `.popup__error_type_${inputElement.name}`
        );
        if (!inputElement.validity.valid) {
          inputElement.classList.add(formConfig.inputErrorClass);
          errorNode.textContent = inputElement.validationMessage;
        } else {
          inputElement.classList.remove(formConfig.inputErrorClass);
          errorNode.textContent = "";
        }
        submitButton.disabled = !isValidInputs(formInputs);
      });
    });
  
    submitButton.disabled = !isValidInputs(formInputs);
  }
  
  function enableValidation(formConfig) {
    const forms = document.querySelectorAll(formConfig.formSelector);
    forms.forEach((form) => {
      setEventListeners(form, formConfig);
    });
  }
  
  function isValidInputs(formInputs) {
    return formInputs.every((item) => {
      return item.validity.valid;
    });
  }
  
  enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_inactive",
    inputErrorClass: "popup__input_has_error",
    errorClass: "popup__error",
  });