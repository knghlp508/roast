/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window._ = require('lodash');
try {
    window.$ = window.jQuery = require('jquery');
    require('foundation-sites');
} catch (e) {

}
//引入 Axios 库并设置默认请求头 X-CSRF-TOKEN
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
//引入Vue
import Vue from 'vue';
//导入路由
import router from './routes';
//导入数据存储器配置
import store from './store.js'

//将 Vue 挂载到 ID 为 app 的页面元素上
new Vue({
    router, store
}).$mount('#app');