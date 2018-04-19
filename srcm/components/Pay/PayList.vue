<template>
	<div class="pay-tittle">
		<div class="oredr-information">
			<p>订单号码：<span>{{order.id}}</span></p>
			<p>应付总额：<b>{{order.orderMoney}}</b>元</p>
			<p v-if="order.orderPayed>0">已付金额：{{fixed(order.orderPayed)}}元&nbsp;&nbsp;&nbsp;&nbsp;还需支付：{{fixed(order.orderMoney-order.orderPayed)}}元</p>
			<h6>请您在提交订单后24小时内完成支付，超时将自动取消</h6>
		</div>
	</div>
</template>

<script>
	const PayList = {
	  	name: 'PayList',
	  	props:['order'],
	  	data () {
	    	return {

	    	}
	  	},
	  	methods:{
        fixed(str){
          str=Number(str)
          return str.toFixed(2)
        }
	  	},
	  	mounted(){

		},
		updated(){

		},
		activated(){

		},
	}
	export default PayList
</script>

<style scoped lang="scss">
	.oredr-information{
		background: #fff;
		padding: 0.75rem;
		font-size: 0.65rem;
		color: #666;
		line-height: 1.45rem;
		p{
			span{
				color: #333;
				font-weight: bold;

			}
			b{
				color: #FF3737;
			}
		}
		h6{
			font-size: 0.5rem;
			font-weight: normal;
		}
	}

</style>
