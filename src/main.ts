import './plugins/axios'
import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
// @ts-ignore
import axios from 'axios'
import VueAxios from 'vue-axios'
// import 'animate.css/animate.min.css'

// Or import them all -- but notice that your
// bundle will probably include unused ones,
// so more KB over the wire that never get used.

// @ts-ignore
createApp(App)
    .use(Quasar, quasarUserOptions)
    .use(router)
    .use(Quasar, quasarUserOptions)
    .use(VueAxios, axios)
    .mount('#app')
