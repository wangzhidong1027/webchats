<template>
  <div class="addTravel">
      <div class="dtitles">
        <span>请输入商户信息</span>
      </div>
      <div class="list">
        <ul >
          <li><label><i>*</i>用户名：</label><input v-model="email" type="text" placeholder="请输入您的邮箱 "></li>
          <li><label><i>*</i>企业名称：</label><input v-model="companyname" type="text" placeholder="请输入企业名称"></li>
          <li><label><i>*</i>城市：</label><input v-model="address" @focus='selectCity'  type=" text" placeholder="请选择所在城市 "></li>
          <li><label><i>*</i>联系人：</label><input v-model="linkname" type=" text" placeholder="请输入联系人姓名 "></li>
          <li><label><i>*</i>联系电话：</label><input v-model="linkphone"  type=" tel" placeholder="请输入联系人手机号 "></li>
          <li><label>激活码：</label><input  type=" text" placeholder="请输入激活码 "><span>非必填选项</span></li>
        </ul>
      </div>
      <div class="upload">
        <div class="upload">
            <p><i>*</i>请上传营业执照</p>
            <div class="dimg just" @click="clickDom('bslicense')">
              <a v-if='!bslicense'></a>
              <img v-if='bslicense' :src="bslicense"  alt="">
              <input  type="file" id="bslicense" ref="bslicense" accept="image/*"
                     @change="ImgBase64($event,'bslicense')" name="bslicense">
            </div>
            <p>请上传企业Logo<span><i>*</i>非必填选项</span></p>
            <div class="dimg back"  @click="clickDom('logo')" >
              <a v-if='!logo'></a>
              <img v-if='logo' :src="logo" alt="">
              <input type="file" id="logo" ref="logo" accept="image/*" @change="ImgBase64($event,'logo')">
            </div>
            <p>请上传企业资质<span><i>*</i>非必填选项</span></p>
            <div class="dimg hic" @click="clickDom('aptitude')"  >
              <a v-if='!aptitude'></a>
              <img v-if='aptitude' :src="aptitude" alt="">
              <input type="file" id="aptitude" ref="aptitude" accept="image/*" @change="ImgBase64($event,'aptitude')">
            </div>
        </div>
      </div>
      <div class="cos">
        <button @click="gosubmit">确认提交</button>
      </div>
      <picker-address v-if="isshow" :selectCity=selectCity :sureCity=sureCity></picker-address>
  </div>
</template>

<script>
  import axios from "axios";
  import qs from "qs";
  import {Indicator, Toast} from "mint-ui";
  import {MessageBox} from 'mint-ui'
  import PickerAddress from './PickerAddress';

  export default{
    name: 'AddTravel',
    data() {
      return {
        email:'',
        companyname:'',
        linkname:"",
        linkphone:'',
        address:[],
        province:'',
        city:'',
        salerphone:'',//激活码
        aptitude:'',//资质
        bslicense:'', //营业执照
        logo:'', 
        isshow:false,
      }  
    },
    methods: {
      clickDom(Dom){
        var img=document.getElementById(Dom)
        img.click()
      },
      selectCity(){
        this.isshow=!this.isshow;
      },
      sureCity(str){
        console.log(str)
        this.address=str;
         this.isshow=false
      },
      upimg(imgsrc, category,_this){
        var _this= this
        var token = '6fHdQpdyvCQGgokuQQ';
        if (category == 'bslicense') {
          axios.post(BASE_URL + '/index.php?r=Common/UploadImg', qs.stringify({
            token: token,
            fileImg: imgsrc,
          })).then(function (res) {
            Indicator.close()
            var a = Base64.decode(res.data)
            a = JSON.parse(a)
            if (a.code==10000&&a.data.err == "10000") {
              _this.bslicense = a.data.data.imgUrl
            } else {
              Toast(a.info)
            }
          }).catch(function (err) {
            Indicator.close()
          });
        }
         if (category == 'logo') {
          axios.post(BASE_URL + '/index.php?r=Common/UploadImg', qs.stringify({
            token: '6fHdQpdyvCQGgokuQQ',
            fileImg: imgsrc,
          })).then(function (res) {
            Indicator.close()
            var a = Base64.decode(res.data)
            a = JSON.parse(a)
            if (a.code==10000&&a.data.err == "10000") {
              _this.logo = a.data.data.imgUrl
            } else {
              Toast(a.info)
            }
          }).catch(function (err) {
            Indicator.close()
          });
        }
         if (category == 'aptitude') {
          axios.post(BASE_URL + '/index.php?r=Common/UploadImg', qs.stringify({
            token: token,
            fileImg: imgsrc,
          })).then(function (res) {
            Indicator.close()
            var a = Base64.decode(res.data)
            a = JSON.parse(a)
            if (a.code==10000&&a.data.err == "10000") {
              _this.aptitude = a.data.data.imgUrl
            } else {
              Toast(a.info)
            }
          }).catch(function (err) {
            Indicator.close()
          });
        }
       
      },
       ImgBase64(e, type) {
        let tag = e.target;
        let fileList = tag.files;
        let imgNum = fileList.length;
        let _this = this;
        var _type = type
        if(!fileList.length){
            return
        }
        Indicator.open('图片上传中')
        var Orientation = null
        EXIF.getData(fileList[0], function () {
          Orientation = EXIF.getTag(fileList[0], 'Orientation');
        });
        let reader = new FileReader();
        reader.readAsDataURL(fileList[0]);
        reader.onload = function (e) {
          var image = new Image();
          image.src = e.target.result;
          image.onload = function () {
            var expectWidth = image.naturalWidth;
            var expectHeight = image.naturalHeight;
            if(type=='logo'){
                expectWidth=800
                expectHeight=800
            }else{
              if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {
                expectWidth = 800;
                expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;
              } else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {
                expectHeight = 1200;
                expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;
              }
            }
           
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            canvas.width = expectWidth;
            canvas.height = expectHeight;
            ctx.drawImage(this, 0, 0, expectWidth, expectHeight);
            var base64 = null;
            // 修复ios上传图片的时候 被旋转的问题
            if (Orientation != "" && Orientation != 1) {
              switch (Orientation) {
                case 6://需要顺时针（向左）90度旋转
                  _this.rotateImg(this, 'left', canvas);
                  break;
                case 8://需要逆时针（向右）90度旋转
                  _this.rotateImg(this, 'right', canvas);
                  break;
                case 3://需要180度旋转
                  _this.rotateImg(this, 'right', canvas);//转两次
                  _this.rotateImg(this, 'right', canvas);
                  break;
              }
            }
            base64 = canvas.toDataURL("image/jpeg", 1);
            // _this.idcardsrc=base64
            if(!base64){
              Toast('上传失败，请重新选择图片，或者更换图片')
              return
            }
            _this.upimg(base64,_type,_this)
          }
        }
      },
      rotateImg(img, direction,canvas) {//图片旋转
        var min_step = 0;
        var max_step = 3;
        if (img == null)return;
        var height = img.height;
        var width = img.width;
        var step = 2;
        if (step == null) {
          step = min_step;
        }
        if (direction == 'right') {
          step++;
          step > max_step && (step = min_step);
        } else {
          step--;
          step < min_step && (step = max_step);
        }
        var degree = step * 90 * Math.PI / 180;
        var ctx = canvas.getContext('2d');
        switch (step) {
          case 0:
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0);
            break;
          case 1:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, 0, -height);
            break;
          case 2:
            canvas.width = width;
            canvas.height = height;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, -height);
            break;
          case 3:
            canvas.width = height;
            canvas.height = width;
            ctx.rotate(degree);
            ctx.drawImage(img, -width, 0);
            break;
        }
      },
      gosubmit(){
        if(!this.username){
          Toast('请输入用户名邮箱')
          return 
        }
         if(!this.companyname){
          Toast('请输入企业名称')
          return 
        }
         if(!this.linkname){
          Toast('请输入联系人姓名')
          return 
        }
         if(!(/^1[3|4|5|8|7][0-9]\d{8,8}$/.test(this.linkphone))){
          Toast('请输入联系人手机号码')
          return 
        }
        if(!bslicense){
          Toast('请上传营业执照')
          return 
        }
        axios.post(BASE_URL+"/index.php?r=YinjiaStage/InputMerch",qs.stringify({
          username:this.email,
          companyname:this.companyname,
          linkname:this.linkname,
          linkphone:this.linkphone,
          salerphone:this.salerphone,
          bslicense:this.bslicense,
          logo:this.logo,
          aptitude:this.aptitude,
})).then(function(res){
            Toast()
        }).catch(function(err){

        })
        
      },
     
    },
    mounted() {


    },
    updated() {

    },
    activated() {

    },
    components: {
      'picker-address':PickerAddress

    }
  }
</script>

<style scoped lang="scss">

  .dtitles{padding:0.75rem 0.75rem; font-size: 0.8rem; font-weight: bold;
    span{
      font-size: 0.8rem;
      color: #333333;
    }
  }

  #aptitude, #bslicense, #logo{
    display: none;
  }
  .dimg {
    img {
      width: 100%;
      height: 100%;
    }
  }
  li{
    b{
      font-size: 0.7rem;
      font-weight: normal;
      color: #666;
    }
  }
  .list ul li span{
    font-size: 0.6rem;
    color: #ff3737;
  }
  .upload{
    p{
      font-size: 0.7rem;
      font-weight: bold;
      color: #666;
      padding-left: 0.75rem;
      line-height: 2.4rem;
      i{
        color: #ff3737;
      }
      span{
        color: #ff3737;
        margin-left: 1rem;
        font-weight: normal;
        font-size: 0.6rem;
      }
    }
  }
  div.list ul li{ padding: 0 0.75rem; background-color: #fff; border-bottom: 1px solid #e3e5e9; zoom: 1; line-height: 2.4rem;}
  div.list ul li:after{content: ""; display: block; height: 0; clear: both;}
  div.list ul li label{font-size: 0.7rem; color: #666; font-weight: bold; }
  div.list ul li label i{ color: #ff3b3b;}
  div.list ul li input{ border: none; width:9.125rem;  margin-left:0.5rem; font-size: 0.7rem; line-height: 2.4rem;}
  div.list ul li a{float: right; font-size: 0.35rem;}
  div.prompt{ padding: 0.625rem  0.75rem 1.75rem 0.75rem;}
  div.prompt span{ font-size: 0.7rem; color: #ff3b3b; font-weight: bold;}
  div.cos{margin: 0rem 0.75rem 2.5rem 0.75rem;margin-top: 1rem}
  div.cos button{ width:100%; padding:0.75rem 0rem; background-color: #ff3737; color: #fff; text-align: center; font-size:0.7rem; border: none; border-radius: 0.1rem;}
  div.upload{ background-color: #fff; margin-top:0.75rem;  }
  div.dimg{width:17.25rem; height:8.75rem; border-radius: 0.1rem; margin: 0rem 0.75rem 0rem 0.75rem; background-repeat: no-repeat; background-size:100% 100%; position: relative;}
  div.dimg a{ width:2.5rem; height: 2.5rem; background-image:url(../../assets/images/j-pay-img/camera.png); background-repeat: no-repeat;  background-size:100% 100%;  display: block; position: absolute; top:2.75rem; left: 50%; margin-left: -1.25rem;}
  /*div.just{ background-image:url(../../assets/images/j-pay-img/Identity_card.png); margin-bottom: 0.75rem; }*/
  /*div.back{ background-image:url(../../assets/images/j-pay-img/Identity_card_counter.png); margin-bottom: 0.75rem; }*/
  /*div.hic{ background-image:url(../../assets/images/j-pay-img/hic.png); margin-bottom: 0.75rem; }*/
  /*div.bank_card{ background-image:url(../../assets/images/j-pay-img/bank_card.png); margin-bottom: 0.75rem; }*/
  /*div.business_license{ background-image:url(../../assets/images/j-pay-img/business_license.png); margin-bottom: 0.75rem; }*/
  .dimg{
    border: 1px solid #eee;
    background: #eee;
    display: flex;
    img{
      justify-content: center;
    }
  }
  .back img{
    width: 8.75rem;
    margin:0 auto;
  }


</style>
