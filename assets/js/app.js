'use strict';

import { fetchData, url } from "./api";
import * as module from "./module.js";``

//@param {nodelist} elements -> Elements node array
//@param {string eventType -> event type like ex -> click, mouseover
//""   {*} callback function
   
const addEventOnElements = function(elements, eventType, callback){
        for(const element of elements) element.addEventListener(eventType,callback);
}

//
const searchView = document.querySelector("[data-search-view]");
const searchToggler = document.querySelector("[data-search-toggler]");

searchToggler.addEventListener("click", function() {
  searchView.classList.toggle("icon-btn");
});
