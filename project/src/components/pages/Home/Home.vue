<template>
	<div id="home">
	<Header  title='零食客'></Header>
	<TabBar></TabBar>
	
	</div>
</template>

<script>
	import Header from 'common/Header'
	import TabBar from 'common/TabBar'
	export default{
		name:'Home',
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