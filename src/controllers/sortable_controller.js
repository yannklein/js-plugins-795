import { Controller } from '@hotwired/stimulus'
import Sortable from 'sortablejs';

export default class extends Controller {

  connect() {
    this.initSortable();
  }

  initSortable() {
    // this.element is the HTML element that has a data-controller="sortable"
    Sortable.create(this.element, {
      ghostClass: "ghost",
      animation: 1500,
    })
  };
}
