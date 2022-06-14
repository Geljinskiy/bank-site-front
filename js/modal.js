(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.forEach((el) => el.addEventListener("click", toggleModal));
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[contatct-modal-open]"),
    closeModalBtn: document.querySelector("[contatct-modal-close]"),
    modal: document.querySelector("[contatct-modal]"),
  };

  refs.openModalBtn.forEach((el) => el.addEventListener("click", toggleModal));
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
