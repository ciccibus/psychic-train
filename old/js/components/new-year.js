import { Component } from "../component.js";
import { fetchYears } from "../fetchYears";
import { isInDom } from "../utils";

const profileContainer = document.getElementById("main");

const html = String.raw;

class NewYear extends Component {
  static component() {
    return html`
        <section id="new-year">
            Year
            <x-new-year></x-new-year>
         </section>
    `;
  }
  connectedCallback() {}
}

customElements.define("x-new-year", NewYear);

const main = function() {
  console.log("HERE");
  document.body.addEventListener("on-new-year", _ => {
    if (!isInDom("#new-year")) {
      profileContainer.innerHTML = NewYear.component();
    }
    fetchYears();
  });
};

export default main;
