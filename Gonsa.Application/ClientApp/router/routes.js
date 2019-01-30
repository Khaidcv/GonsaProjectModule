//import Dashboard from '../Components/Dashboard.vue'
//import WebContract from '../Components/WebContract/List.vue'
//import FormWebContract from '../Components/WebContract/Form.vue'
//import InProcess from '../Components/InProcess.vue'
//import NotFound from '../Components/NotFound.vue'
//import Navigate from '../Components/Navigate.vue'

const Dashboard = () => import('../Components/Dashboard.vue')
const WebContract = () => import('../Components/WebContract/List.vue')
const FormWebContract = () => import('../Components/WebContract/Form.vue')
const InProcess = () => import('../Components/InProcess.vue')
const NotFound = () => import('../Components/NotFound.vue')
const Navigate = () => import('../Components/Navigate.vue')


export const routes = [
  { name: 'Home', path: '/', component: Dashboard },
  { name: 'WebContract', path: '/web-contract', component: WebContract },
  { name: 'NewWebContract', path: '/new-web-contract', component: FormWebContract },
  { name: 'EditWebContract', path: '/web-contract/edit', component: FormWebContract },
  { name: 'InProcess', path: '/in-process', component: InProcess },
  { name: 'Navigate', path: '/navigate/:url', component: Navigate },
  { name: 'NotFound', path: '/**', component: NotFound }
]
