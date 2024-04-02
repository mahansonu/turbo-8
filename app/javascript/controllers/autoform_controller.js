import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="autoform"
export default class extends Controller {
  connect() {}

  submit() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.element.requestSubmit();
    }, 250);
  }
}
