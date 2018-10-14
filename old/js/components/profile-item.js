import { Component } from "../component.js";

const html = String.raw;

class ProfileItem extends Component {
  static template(state) {
    return html`
        <li class="c-card__event">
            <div class="c-bar">
                <div class="c-bar__label">${state.name}</div>
                <div class="c-bar__container">
                    <div class="c-bar__value c-bar__value-${state.value}"></div>
                </div>
            </div>
        </li>
      `;
  }
  static component(state) {
    return html`
        <x-profile-item>
          ${this.template(state)}
        </x-profile-item>
        `;
  }
}

export default ProfileItem;
