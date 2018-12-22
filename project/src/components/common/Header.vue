<template>
	<div id="header">
	<div class="back" v-if="btnshow" @click="goback">
		<b class='iconfont icon-fanhui-' ></b>
	</div>
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
  	.h(60);
  	.fs(18);
  /*	text-align:center;*/
  	.lh(60);
  	z-index:999;
  	background:@themeColor;
  	color: #fff;
  	display: flex;
  	justify-content: center;
  	.back{
  		position: absolute;
  		left: 10px;
  		}
  		b{
  			position: absolute;
  			left: 12px;
  			.fs(20)
  		}
  		span{
  			position: absolute;
  			left: 50px;
  		}
  }

</style>