<template>
  <div class="notice_details">
    <div class="notice">
      <p class="pnotice">紧急通知</p>
      <p class="pcontent">接上游紧急通知，从2017年11月7日下午16点26分至11月8日上午8点30分，系统升级，维护期间快捷D0通道（A、B）不可交易。对于本次维护给您造成的不便，敬请谅解。</p>
      <p class="psignature">J-Pay运营部</p>
      <p class="ptime" @click="ri">2017-12-15 14：00</p>
    </div>
  </div>
</template>

<script>
	 
  export default{
    name: 'NaticeContent',
    data() {
      return {
      	a:'',
      	
      }
    },
    methods: {
    	ri(){
//  		this.a=this.$route.params
//  		console.log(a)
				var b=""
				this.a=window.location.href
				b=this.a
				var index = b .lastIndexOf("\/"); 
    		b=b.substring(index + 1, b.length);
    		console.log(b)
    	}
    	
    },
    mounted() {


    },
    updated() {

    },
    activated() {

    },
    components: {}
  }
</script>

<style scoped lang="scss">
  .notice_details{ background-color: #ffffff; padding: 2.25rem 0.75rem;min-height: 100%;}
  .notice_details p.pnotice{text-align: center; font-size: 0.8rem; color: #333; font-weight: bold; margin-bottom: 1.875rem;}
  .notice_details p.pcontent{ font-size: 0.7rem; color: #666666; text-indent: 1rem; line-height: 1.25rem; margin-bottom: 1.25rem;}
  .notice_details p.psignature{ text-align: right; font-size: 0.7rem; color: #666666; margin-bottom: 0.625rem;}
  .notice_details p.ptime{text-align: right; font-size: 0.7rem; color: #666666;}
</style>
