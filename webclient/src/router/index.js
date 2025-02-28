import Vue from 'vue';
import Router from 'vue-router'
import homePage from '@/views/homePage.vue'
import explorePage from '@/views/explorePage.vue';
import noticePage from '@/views/noticePage.vue';
import minePage from '@/views/minePage.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: homePage,
            name: 'home',
            redirect: '/explore',
            children: [
                {
                    path: 'explore',
                    name: 'explore',
                    component: explorePage
                },
                {
                    path: 'notice',
                    name: 'notice',
                    component: noticePage
                },
                {
                    path: 'mine',
                    name: 'mine',
                    component: minePage
                }
            ]
        }
    ]
})