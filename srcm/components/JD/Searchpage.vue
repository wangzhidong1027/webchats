<template>
	<div class="search" action="" method="post">
		<form class="fstyl" @submit="search()" >
			<input type="search" placeholder="搜索" v-model="text" @keyup="searchlist"  />
			<!--<span @click="add">搜索</span>-->
		</form>
		<div class="hot_search"  v-if="hot_search_show">
			<p>热搜</p>
			<!--<div class="content">
				<a>脱脂牛奶</a>
				<a>脱脂牛奶</a>
				<a>脱脂牛奶</a>
				<a>脱脂牛奶</a>
			</div>-->
			<div class="swiper-hotcontent">
	              <div class="swiper-wrapper clear">
	                  <div class="swiper-slide"><a href="#/">牛奶</a></div>
	                  <div class="swiper-slide"><a href="#/">面包</a></div>
	                  <div class="swiper-slide"><a href="#/">饮料</a></div>
	                  <div class="swiper-slide"><a href="#/">火腿</a></div>
	                  <div class="swiper-slide"><a href="#/">饼干</a></div>
	                  <div class="swiper-slide"><a href="#/">柠檬</a></div>
	                  <div class="swiper-slide"><a href="#/">苹果</a></div>
	                  <div class="swiper-slide"><a href="#/">橙子</a></div>
	                  <div class="swiper-slide"><a href="#/">薯片</a></div>
	                  <div class="swiper-slide"><a href="#/">锅巴</a></div>
	              </div>
	        </div>
		</div>
		<div class="history"  v-if="history_show">
			<div class="historical_search">
				历史搜索
			</div>
			<div class="historical_records" v-for="item in lists" >
				<a :href="jumpurl(item)">{{item.name}}</a>
			</div>
			<span @click="del()" class="del" v-if="delshow">清除历史记录</span>
		</div>
		<ul class="search-list" v-if="isshow">
      		<li v-for=" item in list.data" @click="search(item.categoryid)">在<span>{{item.categoryName}}</span>中搜索<span>{{text}}</span></li>
    	</ul>
	</div>

</template>

<script>
	import Vue from 'vue'
    import { Indicator } from 'mint-ui';
	import axios from 'axios';
	import qs from 'qs';
	//import stores from './stores';
	export default {
	  	data () {
	    	return {
				text:'',
	          	list:'',
        	  	lists:[],
//			  	lists:store.fetch(),
	          	isshow:false,
	          	hot_search_show:true,
	          	history_show:true,
	          	time:null,
	          	delshow:false
	        	}
			},
		methods:{
			
			swipers(){
				var swiper = new Swiper(".swiper-hotcontent", {
			        slidesPerView: 5,
			        slidesPerColumn: 1
			      });
			},
			
	  		transform(str){
	  			var ulr = Base64.encode(str)
	  			ulr = ulr.replace("/",'$')
      			return ulr
      		},
      		jumpurl(str){
      			var jump ='#/goodslist/'+this.transform('kw="'+str.name+'"&cateid='+str.cateid)
      			return jump     			
      		},
       		search(id){
	  		    var cateid = id||''
            	this.isshow=false
            	var obj ={'name':this.text,'cateid':cateid}
            	if(!this.lists.length){
            		this.lists.push(obj) 
            	}else{
            		for( var i=0;i<this.lists.length;i++ ){
            			if(this.lists[i].name==obj.name){
            				break
	            	}else{
	            		if(this.lists.length-1==i){
							this.lists.push(obj) 
							
						}
					 }
            		}
            	}
            	
	          	localStorage.setItem('history',JSON.stringify(this.lists))
              	var url ='#/goodslist/'+this.transform('kw="'+this.text+'"&cateid='+cateid)
	            if(url==window.location.href.split('?')[1]){
	                return false
	            }
        		Indicator.open()
       			document.activeElement.blur();
       			window.location.href=url;
       			
       		   
       		},
          searchlist(){

            var that =this
            clearTimeout(this.timer)
            if(!that.text){
              that.list=''
              that.isshow=false
              that.hot_search_show=true
              that.history_show=true
              return
            }
            
            this.timer = setTimeout(function(){
             axios.post(BASE_URL+'/index.php?r=jdproduct/recommand',qs.stringify({
               keywords:that.text
             })).then(function(res){
               var a=Base64.decode( res.data)
               a=JSON.parse(a)
               console.log(a)
               if(a.data.length){
                 that.isshow=true
                 that.hot_search_show=false
                 that.history_show=false
                 that.list=a
               }else{
                 that.list=''
                 that.isshow=false
                 that.hot_search_show=true
                 that.history_show=true
               }
             }).catch(function(err){

             })
            },800)

          },
          del(){
          	localStorage.removeItem('history');
          	this.lists=[]
          	this.delshow=false;
          }
	  	},
	  	mounted(){
	  		var a  = localStorage.getItem('history')
	  		if(a){
	  			this.lists=JSON.parse(a)
	  			this.delshow=true
	  		}else{
	  			this.lists=[]
	  			
	  		}
	  	},
	  	 updated() {
		    this.swipers();
		  },
	}
</script>

<style scoped lang="scss">
	.search {
		position: relative;
		.fstyl {
			padding: 0.37rem 0 0.37rem 0;
			background-color: #ffffff;
			border-bottom: 0.02rem solid #eeeeee;
		}
		input {
			width: 15.25rem;
			height: 1.5rem;
			border-radius: 1rem;
			background: url(../../assets/images/search.png) no-repeat #eee 0.25rem center;
			border: none;
			font-size: 0.7rem;
			padding-left: 1.25rem;
			background-size: 0.75rem;
			opacity: 0.8;
			display: block;
			margin: 0 auto;
		}
		input::-webkit-search-cancel-button {
			display: none;
		}
		.hot_search {
			background-color: #fff;
			padding: 0 0 0.5rem 0;
			border-bottom: 0.02rem solid #eeeeee;
			p {
				width: 15.25rem;
				font-size: 0.7rem;
				color: #333333;
				padding: 0.42rem 0;
				margin: 0 auto;
			}
			.swiper-hotcontent{  width: 100%;
		      	overflow: hidden;
		      .swiper-wrapper {
		        width: 2000px;
		        overflow: hidden;
		      }
		      .swiper-slide {
		        text-align: center;
		        background: #fff;
		        /* Center slide text vertically */
		        display: -webkit-box;
		        display: -ms-flexbox;
		        display: -webkit-flex;
		        display: flex;
		        -webkit-box-pack: center;
		        -ms-flex-pack: center;
		        -webkit-justify-content: center;
		        justify-content: center;
		        -webkit-box-align: center;
		        -ms-flex-align: center;
		        -webkit-align-items: center;
		        align-items: center;
		        float: left;
		        padding: 0.65rem 0 0.5rem 0;
		        margin: 0;
		       	height: 1.2rem;
		        float: left;
		        flex-direction: column;
		        a{
		        	display: block;
		        	font-size: 0.6rem;
		        	color: #666666;
		        	background-color: #f3f2f8;
		        	/*padding: 10;*/
		        	width:3rem;
		        	line-height: 1.15rem;
		        	text-align: center;
		        	height: 1.15rem;
		        	overflow:inherit;
		        	border-radius:0.1rem;
		        }
		      }
		    }
		}
		.history{
			margin-top: 0.25rem;
			background-color: #fff;
			.historical_search{
				padding:0.5rem 0rem 0.5rem 1.7rem;
				color: #333333;
				font-size: 0.7rem;
				border-bottom: 0.02rem solid #eee;
			}
			.historical_records a{
				padding:0.75rem 0;
				border-bottom: 0.02rem #eeeeee solid;
				color: #666666;
				font-size: 0.7rem;
				margin-left:1.7rem;
				display: block;
				
			}
			span.del{
				text-align: center;
				font-size: 0.35rem;
				color: #666;
				display: block;
				height: 1.5rem;
				line-height: 1.5rem;
			}
		}
		.search-list{
	      position: absolute;
	      background: #fff;
	      /*top:1.6rem;*/
	      top:2.28rem;
	      width: 100%;
	      /*padding: 0.5rem 0 0 0;*/
	      padding-left: 0.7rem;
	      opacity: 0.95;
	      z-index: 8888;
	      li{
	      	padding:0.75rem 0;
	        font-size: 0.7rem;
	        border-bottom: 0.02rem #eeeeee solid;
	        span{
	          color: #ff3737;
	          padding:0 0.2rem;
	        }
	      }
	    }
	    
	}
</style>