// // submit form

const form = document.querySelector(".js-form");
form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { name, phone, message } = evt.currentTarget.elements;
  const data = {
      name: name.value,
      phone: phone.value,
      message: message.value, 
  }

    console.log(data);
    form.reset();
}