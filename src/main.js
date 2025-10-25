import { createApp } from 'vue'
import App from './App.vue'
// 1. Importa las nuevas funciones de vue-router
import { createRouter, createWebHistory } from 'vue-router'

// Importa tus componentes como ya lo hacías
import ErrorComponent from './components/ErrorComponent.vue';
import PortafolioPage from './components/PortafolioPage.vue';
import TestTailwind from './components/TestTailwind.vue';

//importa moment para las fechas
import moment from 'moment';

// 🔑 LÍNEA CLAVE: Importación Global del CSS con Tailwind
// En src/main.js
import './assets/css/main.css'


// 2. Define tus rutas (esto se mantiene casi igual)
const routes = [
    { path: '/home', component: PortafolioPage },
    { path: '/', component: PortafolioPage },
    //pagina 404 o pagina de error
    { path: '/:pathMatch(.*)*', name: 'not-found', component: ErrorComponent },
    

];

// 3. Crea la instancia del router con las nuevas funciones
const router = createRouter({
    history: createWebHistory(), // Esto reemplaza al antiguo `mode: 'history'`
    routes, // Tu arreglo de rutas
});

// 4. Crea la aplicación, usa el router y móntala
const app = createApp(App);
app.use(router); // Así se instalan los plugins en Vue 3
app.config.globalProperties.$moment = moment; //configura moment como una propiedad Global
app.mount('#app');