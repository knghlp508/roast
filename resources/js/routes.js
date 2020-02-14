/*配置前端路由*/

//导入 Vue 和 Vue Router
import Vue from 'vue';
import VueRouter from 'vue-router';

//告知 Vue 我们使用 Vue Router 来处理应用路由
Vue.use(VueRouter);

/**
 * Makes a new VueRouter that we will use to run all of the routes for the app.
 */
export default new VueRouter({
    routes: [
        //首页
        {
            path: '/',
            name: 'home',
            component: Vue.component('Home', require('./pages/Home.vue'))
        },
        //咖啡店列表
        {
            path: '/cafes',
            name: 'cafes',
            component: Vue.component('Cafes', require('./pages/Cafes.vue'))
        },
        //新增咖啡店
        {
            path: '/cafes/new',
            name: 'newcafe',
            component: Vue.component('NewCafe', require('./pages/NewCafe.vue'))
        },
        //显示单个咖啡店
        {
            path: '/cafes/:id',
            name: 'cafe',
            component: Vue.component('Cafe', require('./pages/Cafe.vue'))
        }
    ]
});