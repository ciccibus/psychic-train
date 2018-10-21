"use strict"

import { render } from "./render";
import { logger, createStore } from 'musical-fiesta';

const INITIAL_STATE = { message: ""};

const state = createStore(INITIAL_STATE, logger);

state.setStore({
	message: "Yay! is working!",
	action: "Ready!"
});

const html = `<pre>${JSON.stringify(state.getStore(), null, 2)}</pre>`;

document.body.innerHTML = html;
console.log("=============");
console.log(JSON.stringify(state.getStore(), null, 2));
console.log("=============");

render();
console.log("yay!");
