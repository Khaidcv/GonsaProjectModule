import Dashboard from '../Components/Dashboard.vue'
import WebContract from '../Components/WebContract/List.vue'
import FromWebContract from '../Components/WebContract/Form.vue'
import InProcess from '../Components/InProcess.vue'
export const routes = [
  { name: 'Home', path: '/', component: Dashboard },
  { name: 'WebContract', path: '/web-contract', component: WebContract },
  { name: 'NewWebContract', path: '/new-web-contract', component: FromWebContract },
  { name: 'InProcess', path: '/in-process', component: InProcess }
]
