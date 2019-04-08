<template>
  <div class="container">
    <div class="toolbar-index">
      <input class="toolbar-input" type="text" placeholder="这里输入想查询的处方.."/>
      <div class="toolbar-btn">搜索</div>
    </div>
    <div>轮播</div>
    <div class="func-warpper">
      <div v-for="item in func" :key="item.id" class="func-item-warpper">
        <img class="func-item-img" :src='item.img' />
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
      func: [{
        id: 1,
        img: '',
        desc: '查看处方'
      }, {
        id: 2,
        img: '',
        desc: '三旬药分'
      }, {
        id: 3,
        img: '',
        desc: '订购药材'
      }, {
        id: 4,
        img: '',
        desc: '医疗总结'
      }]
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
  background-color: #638C0B;
}
.toolbar-input{
  padding-left: .5rem;
  width: 65%;
  height: 2.8rem;
  line-height: 2.8rem;
  margin-left: 1.5rem;
  font-size: 1.4rem;
  border-radius: .35rem;
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
  width: 100%;
  height: 5rem;
}
.func-item-warpper{
  display: inline-block;
  position: relative;
  width: 23%;
  height: 100%;
  background-color: #638C0B;
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
</style>
