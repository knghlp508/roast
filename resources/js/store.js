/*数据存储器配置*/

/**
 * Adds the promise polyfill for IE 11
 */
require('es6-promise').polyfill();

/**
 * Import Vue and Vuex
 */
import Vue from 'vue';
import Vuex from 'vuex';

/**
 * Initializes Vuex on Vue.
 */
Vue.use(Vuex);

/**
 * Imports all of the modules used in the application to build the data store.
 */
import {cafes} from './modules/cafe.js'

/**
 * Export the data store.
 */
export default new Vuex.Store({
    modules: {
        cafes
    }
});