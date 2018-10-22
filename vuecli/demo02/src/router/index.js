import Vue from 'vue'
import Router from 'vue-router'
import singer from '@/pages/singer'
import songs from '@/pages/songs'
import player from '@/pages/player'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: singer
    },
    {
      path: '/songs/:id/:name',
      component: songs,
      props:true
    },
    {
      path: '/player/:id/:name',
      component: player,
      props:true
    }
  ]
})
