<template>
  <div class="travel-index">
      <header>
          <div class="merchant">
              <div class="merchant-img">
                <img src="../../assets/images/travelTest/use.jpg" alt="">
              </div>
              <div class="merchant-data">
                  <div class="merchant-text">
                    <p class="name"><b>携程旅行网北京分公司</b></p>
                    <p class="address">北京市朝阳区酒仙桥北路范德萨发按时</p>
                  </div>
                  <div class="issue"><button>发布商品</button></div>
              </div>
          </div>
      </header>
      <div class="container">
         <div class="top"></div>
          <section>
              <div class="iscoll">
            	<mt-loadmore :bottom-method="loadBottom" :bottomLoadingText='""' :bottomDropText='""' :bottomPullText='""' :auto-fill="false" ref='loadmore' :bottomDistance=150 >
                <ul>
                  <li>
                    <div class="goodstit">
                      <div class="img"><img src="../../assets/images/travelTest/goods.jpg" alt=""></div>
                      <div class="goods">
                        <p class="goodsname">海南三亚七日游</p>
                        <p class="goodstext">海南三亚七天游海天盛宴海南，三亚七日游海天海南三亚七日游海天盛宴海南三亚七天游</p>
                        <h5><b>￥ </b><span>900000.00</span></h5>
                      </div>
                    </div>
                    <div class='gopay'>
                        <a href="">去收款</a><button><img src="" alt=""></button>
                    </div>
                  </li>
                   <li>
                    <div class="goodstit">
                      <div class="img"><img src="../../assets/images/travelTest/goods.jpg" alt=""></div>
                      <div class="goods">
                        <p class="goodsname">海南三亚七日游</p>
                        <p class="goodstext">海南三亚七天游海天盛宴海南，三亚七日游海天海南三亚七日游海天盛宴海南三亚七天游</p>
                        <h5><b>￥ </b><span>900000.00</span></h5>
                      </div>
                    </div>
                    <div class='gopay'>
                        <a href="">去付款</a><button><img src="" alt=""></button>
                    </div>
                  </li>
                   <li>
                    <div class="goodstit">
                      <div class="img"><img src="../../assets/images/travelTest/goods.jpg" alt=""></div>
                      <div class="goods">
                        <p class="goodsname">海南三亚七日游</p>
                        <p class="goodstext">海南三亚七天游海天盛宴海南，三亚七日游海天海南三亚七日游海天盛宴海南三亚七天游</p>
                        <h5><b>￥ </b><span>900000.00</span></h5>
                      </div>
                    </div>
                    <div class='gopay'>
                        <a href="">去付款</a><button><img src="" alt=""></button>
                    </div>
                  </li>
                   <li>
                    <div class="goodstit">
                      <div class="img"><img src="../../assets/images/travelTest/goods.jpg" alt=""></div>
                      <div class="goods">
                        <p class="goodsname">海南三亚七日游</p>
                        <p class="goodstext">海南三亚七天游海天盛宴海南，三亚七日游海天海南三亚七日游海天盛宴海南三亚七天游</p>
                        <h5><b>￥ </b><span>900000.00</span></h5>
                      </div>
                    </div>
                    <div class='gopay'>
                        <a href="">去付款</a><button><img src="" alt=""></button>
                    </div>
                  </li>
                </ul>
                </mt-loadmore>
            </div>
          </section>
      </div>
  </div>
</template>

<script>
  import {Indicator, Loadmore,Toast} from 'mint-ui';
  export default{
    name: 'TravelIndex',
    data() {
      return {}
    },
    methods: {
      loadBottom(){
        console.log(1)
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
.travel-index{
  height: 100%;
  display: flex;
  flex-flow: column;
  header{
    height: 6.95rem;
    background: #f0c37c;
    padding: 0 0.75rem;
    z-index: 999;
    .merchant{
      width: 100%;
      height: 5.75rem;
      background: #fff;
      margin-top: 2.75rem;
      border-radius: 8px;
      position: relative;
      box-shadow:0px 0px 30px rgba(0,0,0,0.1);
      .merchant-img{
        width:3rem;
        height: 3rem;
        border-radius: 8px;
        position: absolute;
        top:-1.5rem;
        left: 1rem;
        img{
          width: 100%;
          border-radius: 8px;
        }
      }
      .merchant-data{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        .merchant-text{
          padding-top: 2.5rem;
          padding-left: 1rem;
          .name{
            color: #333;
            font-size: 0.7rem;
            line-height: 1rem;
          }
          .address{
            color: #bfbfbf;
            font-size: 0.5rem;
          }
        }
        .issue{
          display: flex;
          align-items: center;
          padding-right: 1rem;
          button{
            height: 1.5rem;
            width: 4.3rem;
            background: #ffdb49;
            border: none;
            color: #333;
            font-size: 0.6rem;
            text-align: center;
            border-radius: 0.75rem;
            box-shadow:0px 3px 15px rgba(255,219,73, 0.5);
          }
        }
      }
    }
  }
  //内容列表
  .container{
    background: #ececee;
    display: flex;
    flex: 1;
    flex-flow: column;
    /*.top{*/
      /*height: 2.5rem;*/
      /*width: 100%;*/
    /*}*/
    section{
      display: flex;
      flex: 1;
      .iscoll{
        height: 100%;
        overflow: scroll;
        ul{
          padding-top:2.5rem;
         li{
           background:#fff;
           padding:0 0.75rem;
           border-top:1px solid #eee;
            border-bottom:1px solid #eee;
           display: flex;
           flex-flow: column;
           margin-bottom: 0.5rem;
           .goodstit{
             display: flex;
             justify-content: space-around;
             padding: 0.75rem 0;
             border-bottom: 1px solid #eee;
             .img{
              width: 4.5rem;
              margin-right: 0.5rem;
              img{
                width: 100%;
              }
             }
             .goods{
               display: flex;
               flex: 1;
               flex-flow: column;
               .goodsname{
                 font-size: 0.65rem;
                 color: #333;
                 font-weight: bold;
                 height: 1.1rem;
               }
               .goodstext{
                 font-size: 0.5rem;
                 color: #666;
                 flex: 1;
               }
               h5{
                 color: #ff3737;
                 font-size: 0.7rem;
                 height: 0.75rem;
                 b{
                   font-size: 0.5rem;
                 }
               }
             }
           }
           .gopay{
             height: 2.25rem;
             display: flex;
             align-items: center;
             justify-content: flex-end;
             a{
                background: #ff0000;
               line-height: 1.5rem;
               color: #fff;
               font-weight: bold;
               padding:0 1rem;
               font-size: 0.65rem;
             }
             button{
               width: 1.5rem;
               height: 1.5rem;
               border: 1px solid #cacaca;
               margin-left: 0.5rem;
               background: url(../../assets/images/travel/lese.png) no-repeat center;
               background-size: 70%;
             }
           }
         }
        }
      }
    }

  }


}

</style>
