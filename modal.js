export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);

    if (!this.modal) return;

    const closeBtn = this.modal.querySelector(".close__modal");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        this.close();
      });
    }

    const overlay = this.modal.querySelector(".modal-window__overlay");
    if (overlay) {
      overlay.addEventListener("click", () => {
        this.close();
      });
    }
  }

  open() {
    this.modal.classList.add("modal-window--open");
  }

  close() {
    this.modal.classList.remove("modal-window--open");
  }

  isOpen() {
    return this.modal.classList.contains("modal-window--open");
  }
}
