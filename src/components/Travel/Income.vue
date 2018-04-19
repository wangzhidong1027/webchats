<template>
<div class="income">
<header>
  <div class="contianer">
    <nav><span></span><span>全部收入<b>></b></span><span>历史收入</span></nav>
    <h4><b>42052.00</b>元</h4>
    <p>共计<b>3</b>笔</p>
  </div>
</header>
<div class="deal">
  <ul>
    <li>
      <div class="title"><p class="number">201585445544</p><p class="time">21:05</p></div>
      <div class="dealType">信用卡分期</div>
      <div class="money">+154542.00</div>
    </li>
  </ul>
</div>
</div>
</template>

<script>
  export default{
    name: 'Income',
    data() {
      return {}
    },
    methods: {},
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
.income{
  display: flex;
  flex-flow: column;
  header{
    width: 100%;
    height: 6.25rem;
    background: #efc37d;
    padding:1rem 0.75rem 0 0.75rem;
    z-index: 999;
  }
  .contianer{
    background: #fff;
    width: 100%;
    height: 7.5rem;
    border-radius: 8px;
    box-shadow:0px 0px 50px rgba(0,0,0,0.1);
    nav{
      display: flex;
      justify-content: space-between;
      padding-top: 0.75rem;
      span{
        font-size: 0.7rem;
        color: #666666;
        flex: 1;
        text-align: center;
      }
    }
    h4{
      font-size: 0.7rem;
      color: #333;
      text-align: center;
      b{
        line-height: 4.4rem;
        font-size: 2rem;
      }
    }
    p{
      text-align: center;
      font-size:0.7rem;
      color: #666; 
      b{
        color: #333333;
        padding: 3px;
      }
    }
  }
  .deal{
    background: #fff;
    ul{
      padding: 0 0.75rem;
       padding-top: 3rem;
      li{
        display: flex;
        font-size: 0.7rem;
        justify-content: space-between;
        border-top: 1px solid #eee;
        height: 3rem;
        .dealType,.money{
          line-height: 3rem;
          font-size: 0.7rem;
        }
        .dealType{
          color: #999;
        }
        .money{
          color: #333333;
        }
        .title{
          display: flex;
          flex-flow: column;
          padding-top: 0.5rem;
          .time{
            color: #999;
          }
        }
      }
    }
  }
}

</style>
