<template>
	<div id="goodsdetail">
	
	<Header title="商品详情" btnshow='true'></Header>
	
	</div>
</template>

<script>
	import Header from 'common/Header'
	export default{
		name:'GoodsDetail',
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