import { createRouter, createWebHistory } from 'vue-router'
import LearnRules from '@/components/LearnRules.vue'
import GameWelcome from '@/components/GameWelcome.vue'
import GamePlay from '@/components/GamePlay.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GameWelcome
    },
    {
      path: '/rules',
      name: 'rules',
      component: LearnRules
    },
    {
      path: '/play',
      name: 'play',
      component: GamePlay
    }
  ]
})

export default router
