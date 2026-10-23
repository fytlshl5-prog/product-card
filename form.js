export class Form {
  constructor(id) {
    this.form = document.getElementById(id);
  }
  isFormValid() {
    return this.form.checkValidity();
  }
  getFormValues() {
    const formData = new FormData(this.form);
    const formValues = Object.fromEntries(formData);
    return formValues;
  }
  reset() {
    this.form.reset();
  }
}
