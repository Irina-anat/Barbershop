(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        backdrop: document.querySelector("[data-modal]"),
        modal: document.querySelector("[data-modal] .modal"),
        modalLinks: document.querySelector("[data-modal-list]"), 
        onlineBookingLink: document.querySelector("[data-modal-btn]"), 
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.backdrop.addEventListener("click", backdropClickHandler);
    refs.modalLinks.addEventListener("click", modalLinkClickHandler);
    refs.onlineBookingLink.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden");
    }

    function backdropClickHandler(event) {
        if (event.target === refs.backdrop) {
            toggleModal();
        }
    }

    function modalLinkClickHandler(event) {
        if (event.target.tagName === "A") {
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
