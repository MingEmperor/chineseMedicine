<template>
  <div class="container">
    <div class="toolbar-index">
      <div class="toolbar-input" type="text" @click="quary">
        这里输入想查询的处方..
      </div>
      <div class="toolbar-btn">
        搜索
      </div>
    </div>
    <div>
      <swiper :options="swiperOption" class="myswiper">
        <swiper-slide v-for="item in imgList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="func-warpper">
      <div
        v-for="item in func"
        :key="item.id"
        class="func-item-warpper"
        @click="handleclick(item.urlName)"
      >
        <img class="func-item-img" :src='item.imgUrl' />
        <p class="func-item-desc">
          {{item.desc}}
        </p>
      </div>
    </div>
    <purchasing-record></purchasing-record>
  </div>
</template>

<script>
import purchasingRecord from '../common/purchasingRecords'
export default {
  data () {
    return {
      IsSelect: true,
      swiperOption: {
        autoplay: true,
        initialSlide: 1,
        pagination: '.swiper-pagination',
        loop: true
      },
      func: [{
        id: 1,
        imgUrl: require('../../assets/img/处方.png'),
        desc: '查看处方',
        urlName: 'Prescriptions'
      }, {
        id: 2,
        imgUrl: require('../../assets/img/中药.png'),
        desc: '三旬药分'
      }, {
        id: 3,
        imgUrl: require('../../assets/img/药材.png'),
        desc: '订购药材',
        urlName: 'OrderHerbs'
      }, {
        id: 4,
        imgUrl: require('../../assets/img/动态.png'),
        desc: '医术交流'
      }],
      imgList: [{
        id: 1,
        imgUrl: require('../../assets/img/养生套餐Banner.jpg')
      }, {
        id: 2,
        imgUrl: require('../../assets/img/医师论著Banner.png')
      }, {
        id: 3,
        imgUrl: require('../../assets/img/药材Banner.png')
      }, {
        id: 4,
        imgUrl: require('../../assets/img/针灸Banner.jpg')
      }]
    }
  },
  computed: {
    showSwiper () {
      return this.imgList.length
    }
  },
  methods: {
    handleclick (url) {
      this.$router.push({
        name: url
      })
    },
    quary () {
      this.$router.push({
        name: 'Prescriptions'
      })
    }
  },
  components: {
    purchasingRecord
  }
}
</script>

<style scoped>
.toolbar-index{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.4rem;
  background-color: #4CAF50;
}
.toolbar-input{
  padding-left: .5rem;
  width: 65%;
  height: 2.8rem;
  line-height: 2.8rem;
  margin-left: 3.8rem;
  font-size: 1.4rem;
  border-radius: .35rem;
  color: #a3a3a3;
  background-color: #ffffff;
}
.toolbar-btn{
  width: 4rem;
  height: 2.8rem;
  line-height: 2.8rem;
  margin-left: 1rem;
  text-align: center;
  font-size: 1.4rem;
  color:#ffffff;
}
.func-warpper{
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  width: 100%;
  height: 5rem;
}
.func-item-warpper{
  display: inline-block;
  position: relative;
  width: 23%;
  height: 100%;
}
.func-item-img{
  position: absolute;
  left: 50%;
  margin-top: .3rem;
  margin-left: -1.4rem;
  width: 2.8rem;
  height: 2.8rem;
}
.func-item-desc{
  position: absolute;
  left: 50%;
  margin-top: 3.5rem;
  margin-left: -2.2rem;
  width: 4.4rem;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  color: #000000;
  font-size: .9rem;
}
.myswiper >>> .swiper-pagination-bullet-active {
    background:#fff !important;
}
.swiper-wrapper{
  position:relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 37%;
  background: #eee;
}
.swiper-img {
    width: 100%;
}
.swiper-pagination {
   position:absolute;
   top:60%;
}
</style>
