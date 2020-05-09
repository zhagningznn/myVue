import Vue from 'vue'
import Router from 'vue-router'
const login=() =>import('@/views/login')
const layout=() =>import('@/components/layout')
const Tmain=() =>import('@/views/Tmain')

const footMark=() =>import('@/views/footMark')
const memoRandum=()=>import('@/views/memoRandum')
const notes=()=>import('@/views/notes')
const myCollect=()=>import('@/views/myCollect')
const messageBoard=()=>import('@/views/messageBoard')
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
      {text:'主页', path:'/Tmain', component:Tmain,menu: true,icon:'el-icon-house'},
      // {path:'/test001', text:'测试1',menu: true,component:medium,
      //   children:[
      //             {path:'/test002', text:'测试002', menu:true, component:test002}
      //           ]
      // },
      {text:'备忘录', path:'/memoRandum', menu:true, icon:'el-icon-notebook-2', component:memoRandum},//备忘录页面
      {text:'足迹', path:'/footMark', menu:true, icon:'el-icon-camera', component:footMark},//足迹页面
      {text:'笔记', path:'/notes', menu:true, icon:'el-icon-notebook-1' ,component:notes},//笔记页面
      {text:'我的收藏', path:'/myCollect', menu:true, icon:'el-icon-star-off', component:myCollect},//我的收藏
      {text:'留言板',path:'/messageBoard', menu:true, icon:'el-icon-chat-line-round', component:messageBoard},// 留言板
    ]
  },
]

export default new Router({
  routes: fixedRouter
})
