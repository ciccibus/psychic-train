"use strict";

import { render } from "./render";
import { logger, createStore } from "musical-fiesta";
import Nav from "./components/nav";

const INITIAL_STATE = { activeSection: "new-year" };

const state = createStore(INITIAL_STATE, logger, render(Nav));

setTimeout(() => {
  state.setStore({
    activeSection: "profile"
  });
}, 3000);
