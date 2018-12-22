<template>
	<div id="info">
	<Header title='个人信息' btnshow='true'></Header>
	</div>
</template>

<script>
	import Header from 'common/Header'
	
	export default{
		name:'Info',
		components:{Header} ,
		data(){
			return{
				 msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style lang="less" scoped>
</style>