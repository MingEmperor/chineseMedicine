<template>
  <div class="container" style="margin-bottom:3rem;">
    <!-- 标题、日期、所用药材、备注、图片 -->
    <toolbar :title="review.title"></toolbar>
    <div class="presriptions-warpper">
      <div class="presriptions-item">
        <div class="presriptions-title">
          <span class="presriptions-title-text">
            {{review.title}}
          </span>
          <span class="presriptions-title-date">
            {{review.reviewDate}}
          </span>
        </div>
        <div class="presriptions-img">
          <img class="" :src='review.imgUrl' style='width:100%;'/>
        </div>
        <div class="presriptions-desc">
          {{review.desc}}
        </div>
      </div>
    </div>
    <mt-button
      class="delete-btn"
      type="primary"
      @click='handleDelete'
    >
        删除本份周报
      </mt-button>
  </div>
</template>

<script>
import { MessageBox, Toast } from 'mint-ui'
import toolbar from '../common/toolbar'
import purchasingRecord from '../common/purchasingRecords'
export default {
  data () {
    return {
      review: {}
    }
  },
  created () {
    this.$axios.get('ChineseMedicine/report/Report.do?id=' + this.$route.params.id)
      .then(res => {
        this.review = res.data
      })
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
    },
    handleDelete () {
      MessageBox({
        title: '提示',
        message: '确认删除本份周报？',
        confirmButtonText: '确认',
        confirmButtonClass: 'confirm-btn',
        showCancelButton: true
      }).then(action => {
        this.$axios.get('ChineseMedicine/report/deleteReport?id=' + this.$route.params.id)
          .then(res => {
            Toast({
              message: '该周报已删除',
              duration: 1500,
              iconClass: 'iconfont icon-29'
            })
          })
        this.$router.back({
          name: 'WeeklyReview'
        })
      })
    }
  },
  components: {
    toolbar,
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
  margin: 2rem auto;
  border-top: 1px solid #aaa;
}
.presriptions-title{
  position: absolute;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: -1.5rem;
  left: 50%;
  font-family: '汉宋';
  transform: translateX(-50%);
  background-color: #ffffff;
}
.presriptions-title-text{
  font-size: 1.8rem;
  margin-right: 2rem;
}
.presriptions-title-date{
  font-size: 1.3rem;
}
.presriptions-use{
  width: 96%;
  margin: 0 auto;
  min-height: 6rem;
  padding-top:1.8rem;
  border-bottom: 1px dashed #e3e3e3;
}
.presriptions-desc{
  margin-top: 1rem;
  padding: 0 .8rem;
  min-height: 3rem;
  line-height: 3rem;
  font-size: 1.3rem;
  color: #909399;
}
.presriptions-img{
  margin: .8rem auto;
  margin-top: 1.5rem;
  width: 96%;
  border: 1px solid #e3e3e3;
}
.delete-btn {
  margin: 1.5rem 5%;
  width: 90%;
  height: 3.6rem;
  line-height: 3.6rem;
  text-align: center;
  font-size: 1.8rem;
  font-family: '汉宋';
  color: #ffffff;
  background-color: rgb(175, 76, 76);
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
@font-face {
  font-family: '汉宋';
  src: url('../../assets/font/汉宋.otf');
}
</style>
