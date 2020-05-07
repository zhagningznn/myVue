import Vue from 'vue'
import Router from 'vue-router'
import medium from "@/views/medium";
const login=() =>import('@/views/login')
const layout=() =>import('@/components/layout')
const Tmain=() =>import('@/views/Tmain')

const test001=() =>import('@/views/test001')
const test002=()=>import('@/views/test002')
Vue.use(Router)

// 固定的路由
export const fixedRouter =[
  {
    path:'',
    component:layout,
    hidden: true
  },
  {
    path:'',
    component:layout,
    children:[
      {text:'首页', path:'/Tmain', component:Tmain,menu: true,},
      {path:'/test001', text:'测试1',menu: true,component:medium,
        children:[
                  {path:'/test002', text:'测试002', menu:true, component:test002}
                ]
      },
    ]
  },
]

export default new Router({
  routes: fixedRouter
})
