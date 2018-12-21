<template>
<div id="err">
	网页错误点
  <!--<router-link to='/'>击此处回到首页</router-link>-->
  <span>3秒后页面跳转</span>
</div>
</template>

<script>
	export default{
		name:'err',
		components:{
			
		},
		mounted(){
			setTimeout(()=>{
				this.$router.push('/')
				//this.$router.replace('/')
			},1500)
		}
	}
</script>

<style>
</style>