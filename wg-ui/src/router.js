import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./components/Views/Home";
import LoginPage from "./components/Views/LoginPage";
import ToDoList from "./components/Views/ToDoList";
import Settings from "./components/Views/Settings";

Vue.use(VueRouter);

// Router lädt die Elemente in den Contentbereich von App
const routes = [
    {path: '/home', component: Home},
    {path: '/settings', component: Settings},
    {path: '/login', component: LoginPage},
    {path: '/todo', component: ToDoList}
];


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;

