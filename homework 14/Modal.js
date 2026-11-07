export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay = true) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById("overlay");

    if (!this.modal || !this.overlay) {
      return;
    }

    const closeButton = this.modal.querySelector("#modal-close-button");
    if (closeButton) {
      closeButton.addEventListener("click", () => this.close());
    } else if (shouldCloseOnOverlay) {
    }

    if (shouldCloseOnOverlay && this.overlay) {
      this.overlay.addEventListener("click", (e) => {
        if (e.target === e.currentTarget) {
          this.close();
        }
      });
    }

    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", () => this.open());
    }
  }

  open() {
    if (!this.modal || !this.overlay) return;
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
  }

  close() {
    if (!this.modal || !this.overlay) return;
    this.modal.classList.remove("modal-showed");

    if (!document.querySelector(".modal-showed")) {
      this.overlay.classList.remove("overlay-showed");
    }
  }

  isOpen() {
    return this.modal?.classList.contains("modal-showed") ?? false;
  }
}
