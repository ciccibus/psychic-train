import { Component } from "../component.js";
import ProfileItem from "./profile-item";
import { fetchProfile } from "../fetchProfile";
import { isInDom } from "../utils";

const profileContainer = document.getElementById("main");

const html = String.raw;

class Profile extends Component {
  static component() {
    return html`
    <nav class="c-nav-bar--secondary u-container--wide">
        <ul class="u-clean-list u-flex u-flex--wrap">
            <li class="c-button c-button--1-3 c-nav-bar__item-priority c-nav-bar__item-priority-top">
                <a href="career.html"><i class="far fa-chart-bar fa-2x"></i> <span class="u-visually-hidden">Your
                        stats</span></a>
            </li>
            <li class="c-button c-button--1-3">
                <a href="#"><i class="fas fa-dollar-sign fa-2x"></i> <span class="u-visually-hidden">Your finance</span></a>
            </li>
            <li class="c-button c-button--1-3">
                <a href="profile.html"><i class="fas fa-user-alt fa-2x"></i> <span class="u-visually-hidden">Profile</span></a>
            </li>
        </ul>
    </nav>
    <h1>Your stats</h1>
    <article id="profile" class="c-card">
      <header class="c-card__header">Profile</header>
      <ul class="c-card__feed u-clean-list">
          <x-profile></x-profile>
      </ul>
    </article>
    `;
  }
  connectedCallback() {
    fetchProfile().then(profile => {
      profile.forEach(item => {
        this.addItem(item);
      });
    });
  }

  addItem(item) {
    const element = document.createElement("profile-item");
    element.id = `_${item.name}`;
    element.innerHTML = ProfileItem.template(item);
    this.appendChild(element);
  }
}

customElements.define("x-profile-item", ProfileItem);
customElements.define("x-profile", Profile);

const main = function() {
  document.body.addEventListener("on-profile", _ => {
    if (!isInDom("#profile")) {
      profileContainer.innerHTML = Profile.component();
    }
  });
};

export default main;
