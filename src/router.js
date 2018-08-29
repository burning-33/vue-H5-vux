// 1.引入vue和vue-router并赋值给相应的Vue和Router
import Vue from 'vue';
import Router from 'vue-router';
import Pos from '@/components/page/Pos'

 
// 2.通过Vue的use方法注入Router
Vue.use(Router)
// 3.创建 router 实例，然后传 `routes` 配置
const router = new Router({
    // 指定路由选中时的样式类名
    linkActiveClass: 'active',
    hashbang: true, // 将路径格式化为#!开头
    history: true, // 启用HTML5 history模式，可以使用pushState和replaceState来管理记录
    /**
     * 4.@desc 路由配置配置具体的路径
     */
    routes: [
        {
            path: '/',
            name: 'Pos',
            component: Pos
        }
    ]
})
/**
 * @desc 全局监听路由变化
 */
// router.beforeEach((to, from, next) => {
//     store.dispatch('updateHistoryLength') // 变化时更新路由切换长度
//     next()
// })
// 5.导出路由
export default router

