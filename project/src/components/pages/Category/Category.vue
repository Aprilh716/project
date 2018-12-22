<template>
	<div id="category">
	<Header title="分类"></Header>
	<TabBar></TabBar>
	
	
	</div>
</template>

<script>
	import Header from 'common/Header'
	import TabBar from 'common/TabBar'
	export default{
		name:'Category',
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