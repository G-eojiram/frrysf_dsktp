import { createRouter, createWebHistory } from 'vue-router'

// layouts
// import landingpage from '@/layouts/index.vue' //landing page
import adminDashboard from '../layouts/Admin/Dashboard.vue'
import landingpage from '@/layouts/frrysf.vue'

// views
import homeContent from '../views/LandingPage/index.vue'
import registration from '../views/registration.vue'
import login from '../views/login.vue'

  //admin
import dashboardContent from '../views/Admin/dashboard.vue'
import managepetsContent from '../views/Admin/pets.vue'
import applicationContent from '../views/Admin/application.vue'
import userContent from '../views/Admin/user.vue'
import mapContent from '../views/Admin/map.vue'
import profileContent from '../views/Admin/userprofile.vue'

const routes = [
  { //index
    path: '/',
    name: 'landingpage',
    component: landingpage,
    redirect: '/FurrySafe',
    children: // landing page navigation path
      [
        { // dashboard
          path: '/FurrySafe',
          name: 'homeContent',
          component: homeContent
        },
      ]
  },
  { //login
    path: '/loginform',
    name: 'login',
    component: login
  },
  { //register
    path: '/registrationform',
    name: 'registration',
    component: registration
  },
  { // admin dashboard
    path: '/admin',
    name: 'adminDashboard',
    component: adminDashboard,
    redirect: '/dashboard',
    children: 
      [
        { // dashboard
          path: '/dashboard',
          name: 'dashboardContent',
          component: dashboardContent
        },
        { // manage pets
          path: '/managepets',
          name: 'managepetsContent',
          component: managepetsContent
        },
        { // manage application
          path: '/manageapplication',
          name: 'applicationContent',
          component: applicationContent
        },
        { // manage pets
          path: '/manageuser',
          name: 'userContent',
          component: userContent
        },
        { // manage pets
          path: '/managemap',
          name: 'mapContent',
          component: mapContent
        },
        { // Profile
          path: '/yourprofile',
          name: 'profileContent',
          component: profileContent
        },
      ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
