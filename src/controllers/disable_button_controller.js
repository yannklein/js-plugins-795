// sch + tab
import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'reset', 'clickme' ]

  connect() {
    console.log("I'm called at page refresh!")
  }

  disable(event) {
    const button = event.currentTarget
    button.innerText = "Clicked"
    button.disabled = true

    this.resetTarget.classList.remove("d-none")
  }

  enable() {
    this.clickmeTarget.innerText = "Click me again!"
    this.clickmeTarget.disabled = false

    this.resetTarget.classList.add("d-none")
  }
}