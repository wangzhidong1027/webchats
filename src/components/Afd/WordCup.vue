<template>
  <div id="word_cup">
      <div class="title_box">
        <img src="../../assets/images/wordcup/bg1.png" alt="">
        <div class="count_down"  v-if='!show && this.alltime >0'>
            <p class="txt">距活动结束还有</p>
            <div class="time">
              <div class="day">{{time.day}}</div><span>天</span>
              <div class="hours">{{time.hours}}</div><span>时</span>
              <div class="minute">{{time.minute}}</div><span>分</span>
              <div class="second">{{time.second}}</div><span>秒</span>
            </div>
        </div>
        <div class="count_down" v-if="show && this.alltime <= 0">
          <p class="txt big">活动已结束</p>
        </div>
      </div>
    <div class="list">
        <div class="rap">
          <div class="rap_tit tit">
            <a class="go_rap" href="#/goodslist/a3c95ZWk6YWSJmNhdGVpZD0xMjI1OQ==">查看更多</a>
          </div>
          <div class="goods">
            <a href="#/details/Mjc2MzM4OQ=="><img src="../../assets/images/wordcup/1.png" alt=""></a>
            <a href="#/details/NTYzOTk1NQ=="><img src="../../assets/images/wordcup/2.png" alt=""></a>
            <a href="#/details/NTAzMDMwNA=="><img src="../../assets/images/wordcup/3.png" alt=""></a>
            <a href="#/details/MTAwMTQyOQ=="><img src="../../assets/images/wordcup/4.png" alt=""></a>
            <a href="#/details/MTAyMTUwMw=="><img src="../../assets/images/wordcup/5.png" alt=""></a>
            <a href="#/details/MTExODQzOQ=="><img src="../../assets/images/wordcup/6.png" alt=""></a>
            <a href="#/details/MTU1OTExMA=="><img src="../../assets/images/wordcup/7.png" alt=""></a>
            <a href="#/details/MTA2NTE4MQ=="><img src="../../assets/images/wordcup/8.png" alt=""></a>
            <a href="#/details/NDkyODQ4Mg=="><img src="../../assets/images/wordcup/9.png" alt=""></a>

          </div>
        </div>
      <div class="more">
        <div class="more_tit tit">
          <a class="go_rap" href="#/goodslist/a3c95ZWk6YWSJmNhdGVpZD0xMjI1OQ==">查看更多</a>
        </div>
        <div class="more_goods">
          <a href="#/goodslist/a3c955m+5aiB5ZWk6YWSJmNhdGVpZD0xMjI1OQ=="><img src="../../assets/images/wordcup/a.png" alt=""></a>
          <a href="#/goodslist/a3c95pyd5pel5ZWk6YWSJmNhdGVpZD0xMjI1OQ=="><img src="../../assets/images/wordcup/b.png" alt=""></a>
          <a href="#/goodslist/a3c956eR572X5aic5ZWk6YWSJmNhdGVpZD0xMjI1OQ=="><img src="../../assets/images/wordcup/c.png" alt=""></a>
          <a href="#/goodslist/a3c95pWZ5aOr5ZWk6YWSJmNhdGVpZD0xMjI1OQ=="><img src="../../assets/images/wordcup/d.png" alt=""></a>
          <a href="#/goodslist/a3c954+g5rGfJmNhdGVpZD0xMjI1OQ=="><img src="../../assets/images/wordcup/e.png" alt=""></a>
          <a href="#/goodslist/a3c954eV5Lqs5ZWk6YWSJmNhdGVpZD0xMjI1OQ=="><img src="../../assets/images/wordcup/f.png" alt=""></a>
          <a href="#/goodslist/a3c95Zac5Yqb5ZWk6YWSJmNhdGVpZD0xMjI1OQ=="><img src="../../assets/images/wordcup/g.png" alt=""></a>
          <a href="#/goodslist/a3c96Zuq6Iqx5ZWk6YWSJmNhdGVpZD0xMjI1OQ=="><img src="../../assets/images/wordcup/h.png" alt=""></a>
          <a href="#/goodslist/a3c96Z2S5bKb5ZWk6YWSJmNhdGVpZD0xMjI1OQ=="><img src="../../assets/images/wordcup/i.png" alt=""></a>
          <a href="#/goodslist/a3c96b6Z5bGx5rOJJmNhdGVpZD0xMjI1OQ=="><img src="../../assets/images/wordcup/j.png" alt=""></a>
        </div>
      </div>
      <div class="rap">
        <div class="trank_tit tit">
          <a class="go_rap" href="#/goodslist/a3c96Zu26aOfJmNhdGVpZD0xMzIw">查看更多</a>
        </div>
        <div class="goods">
          <a href="#/details/Mjc5MTM0Mw=="><img src="../../assets/images/wordcup/10.png" alt=""></a>
          <a href="#/details/MTU0NjQzMQ=="><img src="../../assets/images/wordcup/11.png" alt=""></a>
          <a href="#/details/NDExMTIxNg=="><img src="../../assets/images/wordcup/12.png" alt=""></a>
          <a href="#/details/MTAyOTE3NQ=="><img src="../../assets/images/wordcup/13.png" alt=""></a>
          <a href="#/details/MTU1MDEwMQ=="><img src="../../assets/images/wordcup/14.png" alt=""></a>
          <a href="#/details/MTMzMzc5MA=="><img src="../../assets/images/wordcup/15.png" alt=""></a>
          <a href="#/details/NDY2Nzg0MA=="><img src="../../assets/images/wordcup/16.png" alt=""></a>
          <a href="#/details/NDU2MTUwMg=="><img src="../../assets/images/wordcup/17.png" alt=""></a>
          <a href="#/details/NTQ2MDQ4"><img src="../../assets/images/wordcup/18.png" alt=""></a>
        </div>
      </div>
      <div class="more">
        <div class="more_tit tit">
          <a class="go_rap" href="#/goodslist/a3c96Zu26aOfJmNhdGVpZD0xMzIw">查看更多</a>
        </div>
        <div class="more_goods">
          <a href="#/goodslist/a3c95Y2r6b6ZJmNhdGVpZD0xMzIw"><img src="../../assets/images/wordcup/k.png" alt=""></a>
          <a href="#/goodslist/a3c96Imv5ZOB6ZO65a2QJmNhdGVpZD0="><img src="../../assets/images/wordcup/l.png" alt=""></a>
          <a href="#/goodslist/a3c95LmQ5LqLJmNhdGVpZD0xMzIw"><img src="../../assets/images/wordcup/m.png" alt=""></a>
          <a href="#/goodslist/a3c95p2l5LyK5Lu9JmNhdGVpZD0="><img src="../../assets/images/wordcup/n.png" alt=""></a>
          <a href="#/goodslist/a3c955SY5rqQJmNhdGVpZD0xMzIw"><img src="../../assets/images/wordcup/o.png" alt=""></a>
          <a href="#/goodslist/a3c955m+6I2J5ZGzJmNhdGVpZD0xMzIw"><img src="../../assets/images/wordcup/p.png" alt=""></a>
          <a href="#/goodslist/a3c95Zac5LmL6YOOJmNhdGVpZD0xMzIw"><img src="../../assets/images/wordcup/q.png" alt=""></a>
          <a href="#/goodslist/a3c95LiJ5Y+q5p2+6bygJmNhdGVpZD0xMzIw"><img src="../../assets/images/wordcup/r.png" alt=""></a>
          <a href="#/goodslist/a3c955u855u8JmNhdGVpZD0xMzIw"><img src="../../assets/images/wordcup/s.png" alt=""></a>
          <a href="#/goodslist/a3c95pyJ5Y+LJmNhdGVpZD0xMzIw"><img src="../../assets/images/wordcup/t.png" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Toast } from "mint-ui";
  import { MessageBox } from "mint-ui";
  import axios from "axios";
  import qs from "qs";
  export default {
    name:'WordCup',
    data () {
      return {
        time: {day:'00',hours:'00',minute:'00',second:'00'},
        nowtime: '',
        endtime: '2018/6/19',
        alltime: null,
        show: false
      }
    },
    computed:{

    },
    methods:{
      counttime(){
        setInterval(()=>{
          this.alltime -= 1000
          if(this.alltime <= 0){
            this.show = true
            clearInterval()
            return
          }
          var day = this.alltime/(1000*60*60*24)
          // this.time.day = Math.floor(day)<10 ? '0'+ Math.floor(day) : Math.floor(day);
          this.$set(this.time, 'day' , Math.floor(day)<10 ? '0'+ Math.floor(day) : Math.floor(day))
          var hours = (day - this.time.day) * 24
          this.$set(this.time, 'hours' , Math.floor(hours)<10 ? '0'+ Math.floor(hours) : Math.floor(hours))
          // this.time.hours =Math.floor( hours)<10 ? '0'+ Math.floor( hours) : Math.floor( hours);
          var minute = (hours - this.time.hours) * 60
          // this.time.minute =Math.floor( minute)<10 ? '0'+ Math.floor( minute) : Math.floor( minute);
          this.$set(this.time, 'minute' , Math.floor(minute)<10 ? '0'+ Math.floor(minute) : Math.floor(minute))
          var second = (minute - this.time.minute) * 60
          // this.time.second =Math.floor( second)<10 ? '0'+ Math.floor( second) : Math.floor( second);
          this.$set(this.time, 'second' , Math.floor(second)<10 ? '0'+ Math.floor(second) : Math.floor(second))
        },1000)
      },

    },
    mounted(){
      var that = this
      axios.post(BASE_URL + '/index.php?r=site/gettime')
        .then(function(res) {
          var overtime = new Date(that.endtime)
          that.nowtime = new Date(res.data)
          that.alltime = overtime - that.nowtime
          if( that.alltime > 0){
            that.counttime()
          }else{
            that.show = true
          }
        })
        .catch(function(err) {

        });
    }
  }
</script>

<style scoped lang="scss">
#word_cup{
  width:100%;
  height: 100%;
  overflow: scroll;
  .title_box{
    position: relative;
    img{
      width: 100%;
    }
    .count_down{
      position: absolute;
      left: 0;
      bottom:0.6rem;
      width: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
      p{
        color: #154e01;
        font-size: 0.5rem;
        padding-bottom: 6px;
        font-weight: bold;
        text-shadow:#fff 1px 0 0,#fff 0 1px 0,#fff -1px 0 0,#fff 0 -1px 0;
        letter-spacing: 0.1rem;
      }
      .big{
        font-size: 0.8rem;
      }
      .time{
        display: flex;
        div{
          width: 1.4rem;
          height: 1rem;
          letter-spacing: 0.4rem;
          text-indent:0.2rem;
          background:url("../../assets/images/wordcup/time.png") repeat ;
          background-size:50% 100%;
          font-size: 0.5rem;
          color: #fff;
          /*text-align: center;*/
          line-height: 1rem;
        }
        span{
          font-size: 0.3rem;
          color: #fff;
          padding: 0 4px;
          line-height: 1rem;
        }
      }
    }
  }
  .list{
    width: 100%;
    background: url("../../assets/images/wordcup/bg.jpg") repeat-y;
    background-size: 100% auto;
    padding-bottom: 100px;
    .rap{
      width: 100%;
      overflow: hidden;
      .goods{
        width: 110%;
        padding:0 0.6rem;
        display: flex;
        flex-wrap: wrap;
        a{
          display: block;
          margin-right: 0.2rem;
          margin-bottom: 0.2rem;
          img{
            width: 5.7rem;
          }
        }
      }
    }
    .more{
      width: 100%;
      overflow: hidden;
      .more_goods{
        width: 110%;
        padding:0 0.6rem;
        display: flex;
        flex-wrap: wrap;
        a{
          display: block;
          margin-right: 0.2rem;
          margin-bottom: 0.2rem;
          img{
            width: 3.35rem;
          }
        }
      }

    }
  }
  .rap_tit{
    background: url("../../assets/images/wordcup/rap.png") no-repeat  center top;
  }
  .more_tit{
    background: url("../../assets/images/wordcup/more.png") no-repeat  center top;
  }
  .trank_tit{
    background: url("../../assets/images/wordcup/trank.png") no-repeat  center top;
  }
  .go_rap{
    display: block;
    width:5.6rem;
    height: 1.5rem;
    margin: 0 auto;
    color: #fff;
    font-size: 0.7rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.1rem;
    background: #154e01;
    line-height: 1.5rem;
    border-radius: 0.75rem;
    -webkit-box-shadow: 0px 3px 5px #101f06;
    -moz-box-shadow:0px 3px 5px #101f06;
    box-shadow:0px 8px 10px #101f06;
  }
  .tit{
    padding-top:3.5rem;
    width: 100%;
    height: 5.8rem;
    -webkit-background-size: 12.5rem auto;
    background-size: 12.5rem auto;
  }
}
</style>
