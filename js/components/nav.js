const html = String.raw;

const Nav = props => html`
  <nav class="c-nav-bar c-nav-bar--bottom u-container--wide">
    <ul class="u-clean-list u-flex">
      <li class="c-nav-bar__item c-button ${
        props.activeSection === "career" ? "c-nav-bar__item-priority" : ""
      } c-button--1-3">
        <a href="/career"><i class="fab fa-black-tie fa-2x"></i> <span class="u-visually-hidden">Carrer</span></a>
      </li>
      <li class="c-nav-bar__item c-button ${
        props.activeSection === "new-year" ? "c-nav-bar__item-priority" : ""
      } c-button--1-3">
        <a href="/new-year"><i class="fas fa-user-clock fa-2x"></i> <span class="u-visually-hidden">News year</span></a>
      </li>
      <li class="c-nav-bar__item c-button ${
        props.activeSection === "profile" ? "c-nav-bar__item-priority" : ""
      } c-button--1-3">
        <a href="/profile"><i class="fas fa-user-alt fa-2x"></i> <span class="u-visually-hidden">Profile</span></a>
      </li>
    </ul>
  </nav>
`;

export default Nav;
