<template>
		<div id="product" @click="goDetail(item)">
			<div class="box">
				<div class="item" 
					v-for="(item,index) in products" :key='index'>
					<img :src="item.imgPath"/>
					<p>{{item.name}}</p>
					<p>{{item.price}}</p>
				</div>
			</div>
			
		</div>
</template>

<script>
	export default{
		name:'products',
		component:{
			
		},
		props:['products'],//接受各个页面传过来的数据
		data(){
			return{
				root:'http://47.95.207.1:80'
			}
		},
		methods:{
			goDetail(item){
				this.$router.push({path:'/gooddetail/123'})
			}
		}
	}
</script>

<style lang="less" scoped>

</style>