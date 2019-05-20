<template>
  <div class="container" style="margin-bottom:3rem;">
    <!-- 标题、日期、所用药材、备注、图片 -->
    <toolbar :title="title"></toolbar>
    <div class="presriptions-warpper">
      <div class="presriptions-item">
        <div class="presriptions-title">
          <span class="presriptions-title-text">
            {{purchase.title}}
          </span>
          <span class="presriptions-title-date">
            {{purchase.date}}
          </span>
        </div>
        <div class="presriptions-use">
          <p v-for='item in purchase.herbs' :key='item.id' class="qwe">
            {{item.name}} - {{item.number}}g
          </p>
        </div>
        <div class="presriptions-desc">
          {{purchase.desc}}
        </div>
        <div class="presriptions-img">
          <img class="" :src='purchase.imgUrl' style='width:100%;'/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import toolbar from '../common/toolbar'
import purchasingRecord from '../common/purchasingRecords'
export default {
  data () {
    return {
      title: '处方详情',
      purchase: {
        id: 1,
        title: '七月七日诊ni先生',
        date: '2018-07-07',
        herbs: [{
          id: 1,
          name: '三七',
          number: '17'
        }, {
          id: 2,
          name: '麻黄',
          number: '22'
        }, {
          id: 3,
          name: '人参',
          number: '30'
        }, {
          id: 4,
          name: '鹿茸',
          number: '10'
        }, {
          id: 5,
          name: '三七',
          number: '17'
        }, {
          id: 6,
          name: '麻黄',
          number: '22'
        }, {
          id: 7,
          name: '人参',
          number: '30'
        }, {
          id: 8,
          name: '鹿茸',
          number: '10'
        }],
        desc: '这是一个备注这是一个备这是一个备注这是一个备注注这是一个备注这是一个备注',
        imgUrl: require('../../assets/img/处方详情图.jpg')
      }
    }
  },
  created () {
    this.$axios.get('ChineseMedicine/recipe/recipe.do?id=' + this.$route.params.id)
      .then(res => {
        if (res.data) {
          this.purchase = res.data
          console.log(this.purchase.herbs)
        } else {
          console.log('获取失败')
        }
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
  border: 1px dashed #aaa;
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
  color: rgba(76,175,80);
  background-color: rgba(76,175,80,.1);
  border: 1px solid rgba(76,175,80,.2);
}
.presriptions-desc{
  width: 100%;
  min-height:3rem;
  line-height:3rem;
  font-size: 1.3rem;
  padding-left: .5rem;
  color: #909399;
}
.presriptions-img{
  margin: .8rem auto;
  width: 96%;
  border: 1px solid #e3e3e3;
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
