import Vue from 'vue'
import Router from 'vue-router'

import Home from "../views/Home";
import About from "../views/About";
import News from "../views/News";
import Message from "../views/Message";
import MessageDetail from "../views/MessageDetail";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          component: News
        }, {
          path: '/home/news',
          component: News
        }, {
          path: 'message',
          component: Message,
          children: [
            {
              path: 'detail/:id',
              component: MessageDetail
            }
          ]
        }
      ]
    }
  ]
})
