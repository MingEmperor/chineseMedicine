<template>
  <div class="container" style="margin-bottom:3rem;">
    <!-- 标题、日期、所用药材、备注、图片 -->
    <div class="toolbar-index">
      <div class="toolbar-back" @click="handleBack">
        <img class="toolbar-back-icon" src="../../assets/img/返回.png" />
      </div>
      <input class="toolbar-input" type="text" placeholder="这里输入想查询的处方.."/>
      <div class="toolbar-btn">搜索</div>
    </div>
    <div class="presriptions-warpper">
      <div  class="presriptions-item">
        <div class="presriptions-title">
          <span class="presriptions-title-text">
            七月七日诊侯智川先生
          </span>
          <span class="presriptions-title-date">
            2018-07-07
          </span>
        </div>
        <div class="presriptions-use">
          <p class="qwe">
            三七(33g)
          </p>
          <p class="qwe">
            麻黄
          </p>
           <p class="qwe">
            灵芝
          </p>
          <p class="qwe">
            人参
          </p>
           <p class="qwe">
            五谷
          </p>
        </div>
        <div class="presriptions-desc">
          备注
        </div>
        <div class="presriptions-img">
          <img class="" src="../../assets/img/箭头.png" />
        </div>
      </div>
    </div>

    <div class="presriptions-warpper">
      <div  class="presriptions-item">
        <div class="presriptions-title">
          <span class="presriptions-title-text">
            七月七日诊侯智川先生
          </span>
          <span class="presriptions-title-date">
            2018-07-07
          </span>
        </div>
        <div class="presriptions-use">
          <p class="qwe">
            三七(33g)
          </p>
          <p class="qwe">
            麻黄
          </p>
           <p class="qwe">
            灵芝
          </p>
          <p class="qwe">
            人参
          </p>
           <p class="qwe">
            五谷
          </p>
        </div>
        <div class="presriptions-desc">
          备注备注备注备注备注备注备注
        </div>
        <div class="presriptions-img">
          <img class="" src="../../assets/img/箭头.png" />
        </div>
      </div>
    </div>

    <div class="float-add" @click="addPrescription">
      +
    </div>
  </div>
</template>

<script>
import purchasingRecord from '../common/purchasingRecords'
export default {
  data () {
    return {
    }
  },
  computed: {
    showSwiper () {
      return this.imgList.length
    }
  },
  methods: {
    handleBack () {
      this.$router.replace({
        name: 'Home'
      })
    },
    addPrescription () {
      this.$router.push({
        name: 'AddPrescription'
      })
    }
  },
  components: {
    purchasingRecord
  }
}
</script>

<style scoped>
.toolbar-index {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.4rem;
  background-color: #4CAF50;
}
.toolbar-back {
  position: absolute;
  left: .3rem;
  width: 2.8rem;
  height: 2.8rem;
  line-height: 2.8rem;
  text-align: center;
}
.toolbar-back-icon{
  width: 100%;
  height: 100%;
}
.toolbar-input {
  padding-left: .5rem;
  width: 66%;
  height: 2.8rem;
  line-height: 2.8rem;
  margin-left: 4rem;
  font-size: 1.4rem;
  border-radius: .35rem;
}
.toolbar-btn {
  width: 4rem;
  height: 2.8rem;
  line-height: 2.8rem;
  margin-left: 1rem;
  text-align: center;
  font-size: 1.4rem;
  color:#ffffff;
}
.presriptions-warpper{
  position: relative;
  width: 96%;
  margin: 0 auto;
  margin-top: 2rem;
  border: 1px dashed #909399;
}
.presriptions-title{
  position: absolute;
  display: flex;
  justify-content: space-around;
  top: -1.5rem;
  left: 2rem;
  height: 3rem;
  line-height: 3rem;
  background-color: #ffffff;
}
.presriptions-title-text{
  font-size: 1.4rem;
  font-weight: bold;
  margin-right: 2rem;
}
.presriptions-use{
  width: 96%;
  margin: 0 auto;
  min-height: 6rem;
  padding-top:1.8rem;
  border-bottom: 1px dashed #e3e3e3;
}
.qwe{
  display: inline-block;
  min-width: 6.6rem;
  margin: .5rem;
  padding: 0 .6rem;
  height: 2.4rem;
  line-height: 2.4rem;
  text-align: center;
  font-size: 1.3rem;
  font-family: 'Gill Sans';
  border-radius: .35rem;
  color: #909399;
  background-color: rgba(76,175,80,.1);
  border: 1px solid rgba(76,175,80,.2);
}
.presriptions-desc{
  width: 100%;
  height:3rem;
  line-height:3rem;
  padding-left: .5rem;
  color: #909399;
}
.presriptions-img{
  margin: .8rem auto;
  width: 96%;
}
.float-add{
  z-index: 999;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 1rem;
  margin: 0 auto;
  width: 6rem;
  height: 6rem;
  line-height: 6rem;
  border-radius: 3rem;
  text-align: center;
  border-radius: 3rem;
  color: #ffffff;
  font-size: 2.3rem;
  background-color: #4CAF50;
}
.float-add:hover{
  width: 6rem;
  height: 6rem;
  line-height: 6rem;
  border-radius: 3rem;
}
</style>
