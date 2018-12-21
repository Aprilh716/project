<template>
	<div id="header">
	<div class="back" v-if="btnshow" @click="goback">←</div>
     <span>{{title}}</span>
	</div>
</template>

<script>
	export default{
		name:'Header',
		component:{
			
		}, 
		props:['btnshow','title'],//其他页面传过来的参数
		data(){
			return{
				
			}
		},
		methods:{
			goback(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="less" scoped>
@import url("../../style/main.less");
  #header{
  	position: fixed;
  	left: 0;
  	top: 0;
  	.w(375);
  	.h(45);
  	.fs(18);
  	text-align:center;
  	.lh(45);
  	z-index:999;
  	background:@themeColor;
  	color: #fff;
  	display: flex;
  	justify-content: center;
  	.back{
  		position: absolute;
  		left: 10px;
  		}
  }

</style>