import { Component } from "../component.js";
import ProfileItem from "./profile-item";
import { fetchProfile } from "../fetchProfile";

const profileContainer = document.getElementById("profile");

const html = String.raw;

class Profile extends Component {
  static component() {
    return html`
    <header class="c-card__header">Profile</header>
    <ul class="c-card__feed u-clean-list">
        <x-profile></x-profile>
    </ul>
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

const main = function(profile) {
  if (profileContainer) {
    profileContainer.innerHTML = Profile.component();
  }
};

export default main;
