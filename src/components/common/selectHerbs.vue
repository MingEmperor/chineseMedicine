<template>
  <div class="container">
    <div class="select-warpper">
      <div class="select-banner">
        <div class="select-btn">
          确定
        </div>
      </div>
      <div v-for="item in herbs" :key="item.id" class="select-item">
        <div class="select-item-img" :class="{'select-item-img-select ': item.number !== 0}">
          <img src="../../assets/img/勾选.png" style="width:100%;"/>
        </div>
        <div class="select-item-title">
          {{item.name}}
        </div>
        <div class="select-item-calculate">
          <div class="select-item-symbol" @click="handleReduceHerbs(item)">-</div>
          <div class="select-item-number">
            {{item.number}}
          </div>
          <div class="select-item-symbol" @click="handleAddHerbs(item)">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: [],
      herbs: [{
        id: 1,
        name: '人参',
        number: 0
      }, {
        id: 2,
        name: '鹿茸',
        number: 12
      }]
    }
  },
  methods: {
    handleAddHerbs (item) {
      item.number++
    },
    handleReduceHerbs (item) {
      if (item.number > 0) {
        item.number--
      } else {
        return item
      }
    }
  }
}
</script>

<style>
.select-warpper{
  width: 100%;
}
.select-banner{
  position: relative;
  margin-bottom: .3rem;
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.2rem;
  line-height: 3.4rem;
  background-color: #ffffff;
  background-color: rgba(76,175,80,.1);
  border-bottom: 1px solid rgba(76,175,80,.2);
}
.select-btn{
  position: absolute;
  right: .5rem;
  width: 6.6rem;
  height: 3.3rem;
  line-height: 3.3rem;
  text-align: center;
  color: #ffffff;
  font-size: 1.3rem;
  background-color: #4CAF50;
}
.select-item{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 4.2rem;
  background-color: #ffffff;
  border-bottom: 1px dotted #4CAF50;
}
.select-item-img{
  opacity: 0;
  width: 2.6rem;
  height: 2.6rem;
}
.select-item-img-select{
  opacity: 1;
}
.select-item-title{
  min-width: 8rem;
  margin-right: 5rem;
  padding: 0 .6rem;
  height: 2.8rem;
  line-height: 2.8rem;
  text-align: center;
  font-size: 1.3rem;
  font-family: 'Gill Sans';
  border-radius: .35rem;
  color: #000000;
  background-color: rgba(76,175,80,.1);
  border: 1px solid rgba(76,175,80,.2);
}
.select-item-calculate{
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 10rem;
  height: 3rem;
}
.select-item-symbol{
  width: 2.4rem;
  height: 2.4rem;
  line-height: 2.4rem;
  text-align: center;
  color: #4CAF50;
  font-size: 1.6rem;
  border: 1px solid #4CAF50;
}
.select-item-number{
  font-size: 1.6rem;
}
</style>
