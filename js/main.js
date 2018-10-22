"use strict"

import { render } from "./render";
import { logger, createStore } from 'musical-fiesta';

const INITIAL_STATE = { message: ""};

const state = createStore(INITIAL_STATE, logger, render);

state.setStore({
	message: "Yay! is working!",
	action: "Ready!"
});
