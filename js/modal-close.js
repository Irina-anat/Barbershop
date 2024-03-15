(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalLinks: document.querySelectorAll(".modal__list a"), 
    onlineBookingLink: document.querySelector(".modal__link-btn"), 
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  window.addEventListener("keydown", onEscKeyPress);

  refs.modalLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggleModal();
    });
  });

  refs.onlineBookingLink.addEventListener("click", () => {
    toggleModal();
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      toggleModal();
    }
  }
})();





// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);
//   window.addEventListener("keydown", onEscKeyPress);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }

//   function onEscKeyPress(event) {
//     if (event.code === "Escape") {
//       toggleModal();
//     }
//   }
// })();
