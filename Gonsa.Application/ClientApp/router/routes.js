import Dashboard from '../Components/Dashboard.vue'
import WebContract from '../Components/WebContract/List.vue'
import FormWebContract from '../Components/WebContract/Form.vue'
import InProcess from '../Components/InProcess.vue'
import NotFound from '../Components/NotFound.vue'

export const routes = [
  { name: 'Home', path: '/', component: Dashboard },
  { name: 'WebContract', path: '/web-contract', component: WebContract },
  { name: 'NewWebContract', path: '/web-contract/new', component: FormWebContract },
  { name: 'EditWebContract', path: '/web-contract/edit/:oid', component: FormWebContract },
  { name: 'InProcess', path: '/in-process', component: InProcess },
  { name: 'NotFound', path: '/**', component: NotFound }
]
