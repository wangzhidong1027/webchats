<template>
	<div id="afd">
		<div class="bg1">
			<div class="fillin">
				<p class="p1">
					<label>手机号码：</label>
					<input type="text" value="" v-model="phone"/>
					<button :disabled="disabled" @click="submit">{{buttontext}}</button>
				</p>
				<p class="p2">
					<label>验证码：</label>
					<input type="text" value="" @blur="verification" v-model="code">
					<button v-if="tips" >输入错误</button>
					<button v-if="correct" class="btng"></button>
				</p>
				<p class="p3"><label>代金券码：</label><input type="text" value=""></p>
				<button class="binding">立即绑定</button>
			</div>
		</div>
		<div class="bg2">
		</div>
	</div>
</template>

<script>
export default {
	data () {
    return {
    	phone:null,
    	code:null,
    	disabled:false,
    	buttontext:"获取验证码",
    	time:0,
    	tips:false,
    	correct:false
      }
  	},
  	methods:{
  		//验证手机号码
  		submit(){
  			 var testphone=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
  			 if(this.phone==''){
                   alert("请输入手机号码");
                }else if(!testphone.test(this.phone)){
                    alert("手机格式不正确");
                }else{
                    this.time=60;
                    this.disabled=true;
                    this.timer();
               }
  		},
  		//验证码
  		verification(){
  			var testcode =/^[1-9]\d*$/;
  			if(this.code==''){
  				alert("请输入验证码");
  			}else if(!testcode.test(this.code)){
  				this.tips=true
  				this.correct=false
  			}else{
  				this.tips=false
  				this.correct=true
  			}
  		},
  		timer() {
                if(this.time > 0) {
                     this.time--;
                     this.buttontext=this.time+"s后重新获取";
                     setTimeout(this.timer, 1000);
                }else{
                     this.time=0;
                     this.buttontext="获取验证码";
                     this.disabled=false;
                }
        },
  	}
}
</script>

<style scoped>
#afd{width: 100%;}
#afd div{background-repeat: no-repeat; background-size: cover; position: relative;}
.bg1{ background-image: url(../../assets/images/afd/afd1.png); height: 18.82rem;}
.bg1 div.fillin{ width:12.8rem; margin:0 auto; position: absolute; top:9rem;}
.bg1 div.fillin p label{ width:3.2rem; font-size: 0.64rem; color: #fff; text-align: right; display: inline-block;}
.bg1 div.fillin p input{padding:0px 0.37rem ; border:none; border-radius: 0.25rem;height: 1rem; line-height: 1rem;}
.bg1 div.fillin p.p1{margin-bottom: 0.17rem;}
.bg1 div.fillin p.p1 input{width:5.1rem; background-color: #fff;color: #000; font-size: 0.6rem; box-shadow: 0px 6px 0px #a5002a;}
.bg1 div.fillin p.p1 button{padding:0.07rem 0.05rem;  border-radius: 0.15rem; background-color: #dc0039; color: #fff; font-size: 0.5rem; border:0.05rem solid #fff;}
.bg1 div.fillin p.p2{margin-bottom: 0.17rem;}
.bg1 div.fillin p.p2 input{width:5.1rem; background-color: #a5002a;color: #fff; font-size: 0.6rem; border: 0.02rem solid #fff;}
.bg1 div.fillin p.p2 button{ padding: 0.1rem 0.25rem; margin-left:0.17rem; font-size: 0.5rem; color: #db0139; background-color: #fff;border: none; border-radius: 0.15rem;}
.bg1 div.fillin p.p2 button.btng{width:0.9rem; height: 0.95rem; background-image: url(../../assets/images/afd/correct.png);background-repeat: no-repeat;background-size: cover;}
.bg1 div.fillin p.p3{margin-bottom: 0.57rem;}
.bg1 div.fillin p.p3 input{width:7.35rem; background-color: #fff;color: #000; font-size: 0.6rem; box-shadow: 0px 6px 0px #a5002a; margin-left: 0.35rem; padding-right: 0;;}
.bg1 div.fillin button.binding{ display: block; padding:0.15rem; background-color: #fff; margin: 0 auto; border:0.1rem solid #ffd100; border-radius: 0.25rem; font-size: 0.7rem; color: #db0139; font-weight:bold;}
.bg2{ background-image: url(../../assets/images/afd/afd2.png); height: 14.52rem;margin-top:-0.02rem;}
</style>