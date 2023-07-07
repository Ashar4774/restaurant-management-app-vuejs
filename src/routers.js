import Home from './components/Home.vue';
import EditRestaurant from './components/Edit.vue';
import AddRestaurant from './components/Add.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'Add',
        component: AddRestaurant,
        path: '/add-restaurant'
    },
    {
        name: 'Edit',
        component: EditRestaurant,
        path: '/edit-restaurant/:id'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;