<template>
	<div id="my">
	<Header title='个人中心'></Header>
	<!--<TabBar></TabBar>-->
	<router-view></router-view>
	
	</div>
</template>

<script>
	import Header from 'common/Header'
	import TabBar from 'common/TabBar'
	export default{
		name:'My',
		components:{Header,TabBar} ,
		data(){
			return{
				 msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style lang="less" scoped>
</style>