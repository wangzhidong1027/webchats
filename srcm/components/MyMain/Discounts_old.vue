<template>
	<div class="discounts">
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">未使用</mt-tab-item>
		  <mt-tab-item id="2">已使用</mt-tab-item>
		  <mt-tab-item id="3">已过期</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <ul>
		    	<!--<li>
		    		<a href=""><img src="../../assets/images/youhuiquan.jpg" alt="" /></a>
		    	</li>
		    	<li>
		    		<a href=""><img src="../../assets/images/youhuiquan.jpg" alt="" /></a>
		    	</li>
		    </ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
				<ul>
		    	<li>
		    		<a href=""><img src="../../assets/images/youhuiquan1.jpg" alt="" /></a>
		    	</li>
		    	<li>
		    		<a href=""><img src="../../assets/images/youhuiquan1.jpg" alt="" /></a>
		    	</li>
		    </ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
				<ul>
		    	<li>
		    		<a href=""><img src="../../assets/images/youhuiquan.jpg" alt="" /></a>
		    	</li>
		    	<li>
		    		<a href=""><img src="../../assets/images/youhuiquan1.jpg" alt="" /></a>
		    	</li>-->
		    </ul>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	import { Navbar, TabItem } from 'mint-ui';
	import { MessageBox } from 'mint-ui';	
	const Discounts = {
	  	name: 'Discounts',
	  	data () {
	    	return {
				selected:'1',
	    	}
	  	},
	  	methods:{
	  		
	  	},
	  	mounted(){
 			 document.title = '优惠券'
 			var token = localStorage.getItem("token")
			if(!token){
	  			MessageBox.confirm('您还未登录，现在去登录?').then(action => {
					window.location.href="#/login";
				},
				action => {
					window.location.href="#/main";
				})
	  		}
		},
		updated(){

		},
		activated(){

		},
	    components:{
	
	    }
	}
	export default Discounts
</script>

<style scoped lang="scss">
.discounts{
	.mint-navbar{
		height:2.25rem;
		.mint-tab-item{
			.mint-tab-item-label{
				font-size:0.65rem;
			}
		}
		.is-selected{
			color: #FF3737;
			margin-bottom: 0px;
			border-bottom: 1px solid #FF3737;
		}
	}
	.mint-tab-container-wrap{
		.mint-tab-container-item{
			background: #F5F5F5;
			ul{
				li{
					padding: 0.75rem;
					padding-bottom: 0;
					a{
						display: block;
						width: 100%;
						img{
							width: 100%;
						}
					}
				}
			}
		}
		
	}
}
	

</style>
