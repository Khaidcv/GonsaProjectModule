const Dashboard = () => import('../Components/Dashboard.vue')
const WebContract = () => import('../Components/WebContract/List.vue')
const FormWebContract = () => import('../Components/WebContract/Form.vue')
const InProcess = () => import('../Components/InProcess.vue')
const NotFound = () => import('../Components/NotFound.vue')

export const routes = [
  { name: 'Home', path: '/', component: Dashboard },
  { name: 'WebContract', path: '/web-contract', component: WebContract },
  { name: 'NewWebContract', path: '/new-web-contract', component: FormWebContract },
  { name: 'EditWebContract', path: '/web-contract/edit', component: FormWebContract },
  { name: 'InProcess', path: '/in-process', component: InProcess },
  { name: 'NotFound', path: '/**', component: NotFound }
]
