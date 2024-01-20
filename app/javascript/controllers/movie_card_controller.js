import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="movie-card"
export default class extends Controller {
  static targets = [ "content" ]

  connect() {
    console.log(this.contentTarget);
  }

  revealContent() {
    this.contentTarget.classList.toggle("d-none");
  }
}
