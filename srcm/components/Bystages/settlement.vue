<template>
	<div id="lists">
		<ul>
			<li class="bd1">
				<div class="box"> 
					<div class="img">
						<img src="../../assets/images/bystages/bank.png" />
					</div>
					<div class="font">
						<p class="pc1">银联卡</p>
						<p class="pc2" v-if="tf">{{bnum}}</p>
						<p class="pc2" v-else>{{bnums}}</p>
					</div>
					<div class="shows" :class="{'hides':shide}" @click="displays"></div>
				</div>
			</li>
			<li class="bd2">
				<div class="box"> 
					<div class="img">
						<img src="../../assets/images/bystages/alipay.png" />
					</div>
					<div class="font">
						<p class="pc1">支付宝账户</p>
						<p class="pc2" v-if="tf">{{anum}}</p>
						<p class="pc2" v-else>{{anums}}</p>
					</div>
					<div class="shows" :class="{'hides':shide}" @click="displays"></div>
				</div>
			</li>
			<li class="bd3">
				<div class="box"> 
					<div class="img">
						<img src="../../assets/images/bystages/wechat.png" />
					</div>
					<div class="font">
						<p class="pc1">微信账号</p>
						<p class="pc2" v-if="tf">{{wnum}}</p>
						<p class="pc2" v-else>{{wnums}}</p>
					</div>
					<div class="shows" :class="{'hides':shide}" @click="displays"></div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
 	data() {
    	return {
        	shide:false,
        	tf:true,
        	bnum:'2215000025257878699',
        	anum:'17500251887',
        	wnum:'1056044726@qq.com',
        	bnums:'',
        	anums:'',
        	wnums:'',
      	}
    },
    methods:{
		displays(){
			this.shide=!this.shide
			this.tf=!this.tf
			this.bnums=this.bnum.replace(/^(\w{4})\w{12}(.*)$/, '$1************$2')  
			this.anums=this.anum.replace(/^(\w{3})\w{4}(.*)$/, '$1****$2')  
			this.wnums=this.wnum.replace(/^(\w{4})\w{6}(.*)$/, '$1****$2') 
		}	
	},
    
 }	
</script>

<style scoped>
#lists{padding: 0.75rem 0.75rem 0 0.75rem;}
#lists ul li{width:17.25rem; border-radius: 0.25rem; margin-bottom: 0.75rem; padding:1.12rem 0;}
#lists ul li div.box{ width:15.3rem; margin: 0 auto;}
#lists ul li div.box:after{content: ""; display: block; height: 0; clear: both;}
#lists ul li div div.img{ width:1.75rem ; height: 1.77rem; float:left;}
#lists ul li div div.img img{width: 100%; height: 100%;}
#lists ul li div div.font{float:left; padding-left: 0.75rem;}
#lists ul li div div.font p.pc1{color: #fff; font-size: 0.7rem; margin-bottom: 0.3rem;}
#lists ul li div div.font p.pc2{color: #fff; filter:alpha(opacity=60);-moz-opacity:0.6;opacity:0.6; font-size: 0.55rem;}
#lists ul li div div.shows{float:right; width:1rem; height: 0.62rem; background-image: url(../../assets/images/bystages/show.png); background-repeat: no-repeat; background-size:cover; margin-top: 0.7rem;}
#lists ul li div div.hides{float:right; width:1rem; height: 0.62rem; background-image: url(../../assets/images/bystages/hide.png); background-repeat: no-repeat; background-size:90%; margin-top: 0.7rem;}
#lists ul li.bd1{
	background: -webkit-linear-gradient(left, #ff502a, #ff8e48); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #ff502a, #ff8e48); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #ff502a, #ff8e48); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #ff502a, #ff8e48); /* 标准的语法 */
}
#lists ul li.bd2{
	background: -webkit-linear-gradient(left, #1495d1, #62beea); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #1495d1, #62beea); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #1495d1, #62beea); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #1495d1, #62beea); /* 标准的语法 */
}
#lists ul li.bd3{
	background: -webkit-linear-gradient(left, #3cc45a, #53d66b); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #3cc45a, #53d66b); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #3cc45a, #53d66b); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #3cc45a, #53d66b); /* 标准的语法 */
}
</style>