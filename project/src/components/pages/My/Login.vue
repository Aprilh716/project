<template>
	<div id="login">
	<Header title='登录' btnshow='true'></Header>
	</div>
</template>

<script>
	import Header from 'common/Header'
	
	export default{
		name:'Login',
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