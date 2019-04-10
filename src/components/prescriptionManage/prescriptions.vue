<template>
  <div class="container">
    <!-- 标题、日期、所用药材、备注、图片 -->
    <div class="toolbar-index">
      <div class="toolbar-back">
        ➡️
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
          <img class="" src="../../assets/箭头.png" />
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
          <img class="" src="../../assets/箭头.png" />
        </div>
      </div>
    </div>

    <div class="float-add">
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

  },
  components: {
    purchasingRecord
  }
}
</script>

<style scoped>
.toolbar-index {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.4rem;
  background-color: #D9D7C1;
}
.toolbar-back {
  width: 4rem;
  height: 2.8rem;
  line-height: 2.8rem;
  margin-left: 1rem;
  text-align: center;
  font-size: 1.4rem;
  color:#ffffff;
}
.toolbar-input {
  padding-left: .5rem;
  width: 65%;
  height: 2.8rem;
  line-height: 2.8rem;
  margin-left: .5rem;
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
  background-color: rgba(144,147,153,.1);
  border: 1px solid rgba(144,147,153,.2);
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
  position: sticky;
  bottom: 1rem;
  margin: 0 auto;
  width: 4rem;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  border-radius: 2rem;
  color: #ffffff;
  font-size: 2.3rem;
  background-color: #D9D7C1;
}
</style>
