<template>
	<div id="my">
	这里是我的页面
	
	</div>
</template>

<script>
	import TabBar from 'common/TabBar'
	export default{
		name:'My',
		components:{TabBar} ,
		data(){
			return{
				 msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style lang="less" scoped>
</style>