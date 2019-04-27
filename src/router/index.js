import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Prescriptions from '@/components/prescriptionManage/prescriptions'
import AddPrescription from '@/components/prescriptionManage/addPrescription'
import PrescriptionsList from '@/components/prescriptionManage/PrescriptionsList'
import OrderHerbs from '@/components/orderHerbs/index'
import PersonalCenter from '@/components/personalCenter/personalCenter'
import PieChart from '@/components/pieChart/pieChart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/components/prescriptionManage/prescriptions',
      name: 'Prescriptions',
      component: Prescriptions
    }, {
      path: '/components/prescriptionManage/addPrescription',
      name: 'AddPrescription',
      component: AddPrescription
    }, {
      path: '/components/orderHerbs/index',
      name: 'OrderHerbs',
      component: OrderHerbs
    }, {
      path: '/components/personalCenter/personalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    }, {
      path: '/components/prescriptionManage/prescriptionsList',
      name: 'PrescriptionsList',
      component: PrescriptionsList
    }, {
      path: '/components/prescriptionManage/pieChart',
      name: 'PieChart',
      component: PieChart
    }
  ]
})
