import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Prescriptions from '@/components/prescriptionManage/prescriptions'
import AddPrescription from '@/components/prescriptionManage/addPrescription'
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
    }
  ]
})
