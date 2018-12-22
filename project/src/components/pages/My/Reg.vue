<template>
	<div id="reg">
	<Header title='注册' btnshow='true'></Header>
	</div>
</template>

<script>
	import Header from 'common/Header'
	
	export default{
		name:'Reg',
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