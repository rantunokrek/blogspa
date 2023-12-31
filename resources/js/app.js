
require('./bootstrap');
import Vue from 'vue';
import routes from './router/index';
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
import store from './store/index';


var toastrConfiqs = {
    position: 'top right',
    showDuration: '1000',
    timeOut: '5000',
    closeButton: true,

}
Vue.use(CxltToastr, toastrConfiqs)


Vue.component('app-header', require('./components/Header.vue').default);
let auth = localStorage.getItem("auth");

if (auth) {
    store.dispatch('authUser').then(() => {
        const app = new Vue({
            el: '#app',
            router: routes,
            store,
        });
    });
} else {
    const app = new Vue({
        el: '#app',
        router: routes,
        store,
    });
}
