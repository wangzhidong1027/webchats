<template>
  <div class="pickerAddress">
    <div class="list">
        <h5 class="title"><span @click="selectCity">取消</span>请选择城市<span @click="sureCity(myaddress)">确定</span></h5>
        <mt-picker v-if='show' :slots="slots" valueKey=cat   @change="onValuesChange" :visibleItemCount=5></mt-picker>
      </div>
  </div>
</template>

<script>
import { Picker } from 'mint-ui';
import axios from "axios";
import qs from "qs";
  export default{
    name: 'PickerAddress',
    props:['selectCity','sureCity',],
    data() {
      return {
        show:false,
        slots: [
          {
            flex: 1,
            values: [],
            className: 'slot1',
            textAlign: 'center',
            defaultIndex:0,
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'center',
            defaultIndex:0,
          }
        ],
        myaddress:[]
      }
    },
    methods: {
      onValuesChange(picker, values) {
          if(this.slots[0].values.length){
             if(!this.myaddress.length){
              picker.setSlotValue( 0 ,this.slots[0].values[0])
              picker.setSlotValue( 2 ,this.slots[2].values[0])
                this.myaddress.push(this.slots[0].values[0])
                this.myaddress.push(this.slots[2].values[0])
                console.log( picker)
              
            }else{
              this.myaddress=values
            }
          }
        

      },
      getTow(catid){
        var that =this
         axios.post(BASE_URL+"/index.php?r=YinjiaStage/GetRegion",qs.stringify({
          catid:catid,
          level:2,
        })).then(function(res){
          var a= JSON.parse(Base64.decode(res.data))
           that.slots[2].values=a.data.data
        }).catch(function(err){

        })
      }
     
    },
    mounted() {
      var that =this
       axios.post(BASE_URL+"/index.php?r=YinjiaStage/GetRegion",qs.stringify({
          catid:'',
        })).then(function(res){
          var a= JSON.parse(Base64.decode(res.data))
          // that.getTow(a.data.data[0].catid)
          that.slots[0].values=a.data.data
          axios.post(BASE_URL+"/index.php?r=YinjiaStage/GetRegion",qs.stringify({
            catid:a.data.data[0].catid,
            level:2,
          })).then(function(res){
            var b= JSON.parse(Base64.decode(res.data))
            that.slots[2].values=b.data.data
            console.log( that.slots)
              that.show=true
          }).catch(function(err){

          })
         
        }).catch(function(err){

        })
    },
    updated() {

    },
    activated() {

    },
    components: {}
  }
</script>

<style  lang="scss">
.pickerAddress{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #eee;
  .list{
    width: 100%;
    position: absolute;
    bottom: 0;
    background: #fff;
  }
  h5{
    text-align: center;
    font-size: 0.8rem;
    line-height: 2rem;
    display: flex;
    justify-content:space-between;
    color:#333;
    span{
      color: #333;
      font-size: 0.65rem;
      padding:0 0.75rem;;
    }
  }
  .picker-item{
    font-size: 0.65rem;
  }
}

</style>
