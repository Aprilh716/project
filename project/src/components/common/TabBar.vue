
<template>
  <ul id='tabbar'>
     <router-link 
     :to="item.path" 
     tag='li'
	 v-for='(item,index) in navlist'
	 :key='index'
	 active-class='sel'
     >
 	{{item.title}}
 	   <a class='iconfont icon' :class="item.icon"></a>
     </router-link>

   </ul>
</template>

<script>


export default {
  name: 'TabBar',
  components: {
    
  },
  data(){
  	return {
  		navlist:[
  		{path:'/home',title:'首页',icon:'icon-shouye'},
  		{path:'/category',title:'分类',icon:'icon-fenlei'},
  		{path:'/shopcar',title:'购物车',icon:'icon-gouwuche'},
  		{path:'/my',title:'我的',icon:'icon-wode'}]
  	}
  }
}

</script>

<style lang="less" scoped>
@import url("../../style/main.less");
#tabbar{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	.h(60);
	background: @tabBg;
		li{
		width: 25%;
		.fs(16);
		text-align:center;
		.lh(35);
		.p_t(30);
		position: relative;
		
		color:@tabColor;	
		.icon{
			position: absolute;
			left: 40%;
			top: 0px;
			.fs(18);
			color:@icon1;
		
		}
  }
	.sel{
		color: @tabSelColor;
	}
}

</style>