import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
import Home from 'pages/Home/Home.vue';
import Category from 'pages/Category/Category.vue';
import My from 'pages/My/My.vue';
import Login from 'pages/My/Login'
import Reg from 'pages/My/Reg'
import Info from 'pages/My/Info'
import ShopCar from 'pages/ShopCar/ShopCar.vue';
import Theme from 'pages/Theme/Theme.vue'
import GoodsDetail from 'pages/GoodsDetail/GoodsDetail'
import Err from 'common/Err'
let router=new VueRouter({
	routes:[
	{path:'/',redirect:'/home'},//路由的重定向
	{path:'/home',component:Home},
	{path:'/category',component:Category},
	{path:'/my',component:My,
		children:[
			    {path:'reg',component:Reg},
			    {path:'login',component:Login},
			    {path:'info',component:Info},
			    {path:'',component:Login}
			 ]
	},
	{path:'/shopcar',component:ShopCar},
	{path:'/goodsdetail/:id',component:GoodsDetail},
//	{path:'/theme/:themeId',component:Theme},
    {name:'xixi',path:'/theme/:themeId/:title',component:Theme},//命名导航
	{path:'/notfind',component:Err},
	{path:'**',redirect:'/notfind'}
	]
})
export default router;