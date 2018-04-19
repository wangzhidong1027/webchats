<template>
<div id="receivables">
	<div class="receivablesbox">
		<p class="pfont">扫一扫，向我付款</p>
		<div class="img">
			<img src="../../assets/images/afd/receivables.png"/>
		</div>
		<div class="money">
			<span v-if="shide">{{message}}</span>
			<input value="" type="tel" ref="moneys"  v-model="message" v-show="!shide" @blur="hindes" @keyup.delete="de" />
		</div>
		<div class="content">海南三亚七天游</div>
		<div class="operation">
			<a class="modify" @click="displays">修改金额</a>
			<a class="preservation">保存图片</a>
		</div>
	</div>
	<a class="jump">查看结算账户</a>
</div>
</template>

<script>
export default{
data() {
    	return {
        	message:'￥199999999.00',
        	shide:true,
      	}
    },
    methods:{
    	displays(){
    		this.shide=false
    		this.$refs.moneys.fous
    	},
    	hindes(){
    		if(this.message=='￥'){
    			this.shide=false
    			this.$refs.moneys.fous
    		}else{
    			this.shide=true
    		}
    	},
    	de(){
    		if(this.message==""){
    			this.message='￥'
    		}
    	}
    }
 }
</script>

<style scoped>
#receivables{
  background: -webkit-linear-gradient(#ecbf71, #e6b559); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#ecbf71, #e6b559); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#ecbf71, #e6b559); /* Firefox 3.6 - 15 */
  background: linear-gradient(#ecbf71, #e6b559); /* 标准的语法 */
  padding:1rem 1rem;
  height: 100%;
}
#receivables .receivablesbox{width:16.75rem; margin: 0 auto 3.12rem auto; background-color: #fff; padding:2rem 0; border-radius: 0.15rem;}
.receivablesbox p.pfont{ font-size: 0.8rem; color: #333333; margin-bottom: 2rem; text-align: center;}
.receivablesbox div.img{width:8.92rem; height: 8.92rem; margin: 0 auto 1.25rem auto;}
.receivablesbox div.img img{ width:100%; height: 100%;}
.receivablesbox div.money{color: #333333;font-size:1.75rem; text-align: center; }
.receivablesbox div.money label{/*display: inline-block;*/ }
.receivablesbox div.money span {/*display: inline-block;*/ font-weight: bold;  }
.receivablesbox div.money input{
	text-align: center; 
	width:90%; 
	border: none; 
	font-weight: bold; 
	font-size: 1.75rem; 
	font-family: tahoma,Helvetica, 
	Arial,"\5FAE\8F6F\96C5\9ED1"; 
}
.receivablesbox div.content{font-size: 0.65rem; color: #999999; text-align: center; margin-bottom: 2.37rem;}
.receivablesbox div.operation{width:9.1rem; margin: 0 auto;}
.receivablesbox div.operation a{ display: inline-block; font-size: 0.7rem; color: #333333;}
.receivablesbox div.operation a.modify{width:4.47rem; height:30px; line-height:30px; text-align:left; border-right:0.02rem solid #c7c7c7;}
.receivablesbox div.operation a.preservation{width:4.3rem; height:30px; line-height:30px; text-align:right; }
#receivables a.jump{font-size: 0.7rem; display: block; text-align: center; text-align: center; color: #fff;}
</style>