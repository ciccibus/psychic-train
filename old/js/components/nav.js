import { Component } from "../component.js";
import DelegatedListener from "../delegatedListener";
import { toggleCssClass } from "../utils";
const html = String.raw;

class MainNav extends Component {
  static template() {
    return html`
      <nav class="c-nav-bar c-nav-bar--bottom u-container--wide">
        <ul class="u-clean-list u-flex">
          <li class="c-nav-bar__item c-button c-button--1-3">
            <a href="/career"><i class="fab fa-black-tie fa-2x"></i> <span class="u-visually-hidden">Carrer</span></a>
          </li>
          <li class="c-nav-bar__item c-button c-nav-bar__item-priority c-button--1-3">
            <a href="/new-year"><i class="fas fa-user-clock fa-2x"></i> <span class="u-visually-hidden">News year</span></a>
          </li>
          <li class="c-nav-bar__item c-button c-button--1-3">
            <a href="/profile"><i class="fas fa-user-alt fa-2x"></i> <span class="u-visually-hidden">Profile</span></a>
          </li>
        </ul>
      </nav>
    `;
  }
  static component() {
    return html`
        <x-main-nav>
          ${this.template()}
        </x-main-nav>
        `;
  }
  connectedCallback() {
    this.addEventListener("click", new DelegatedListener(this));
  }
  onclick(e) {
    e.preventDefault();
    if (e.target && e.target.nodeName == "LI") {
      const target = e.target;
      this.toggle(
        target,
        "c-nav-bar__item-priority",
        ".c-nav-bar--bottom .c-nav-bar__item-priority"
      );
      this.sendEvent(target.querySelector("a").pathname.substring(1));
    }
  }
  sendEvent(eventName) {
    const event = new CustomEvent(`on-${eventName}`);
    document.body.dispatchEvent(event);
  }
  toggle(target, className, previousTarget) {
    toggleCssClass(previousTarget, className);
    toggleCssClass(target, className);
  }
}

customElements.define("x-main-nav", MainNav);

const main = function() {
  document.getElementById("footer").innerHTML = MainNav.component();
};

export default main;
