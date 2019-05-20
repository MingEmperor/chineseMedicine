<template>
  <div class="container">
    <div class="select-warpper">
      <div class="select-banner">
        <input
          v-model='keyword'
          class='select-search'
          placeholder='品种俱全，请在此输入药材名'
        />
      </div>
      <div
        v-if='valueList.length !== 0
              && list.length !== 0
              && !keyword'
        class='select-item tips'
      >
        <span>以下是已经选好的药材</span>
      </div>
      <div
        v-for="item in list"
        :key="item.id"
        class="select-item"
      >
        <div
          class="select-item-img"
          :class="{'select-item-img-select ': item.number !== 0}"
        >
          <img
            src='../../assets/img/勾选.png'
            style='width:100%;'
          />
        </div>
        <div class="select-item-title">
          {{item.name}}
        </div>
        <div class="select-item-calculate">
          <div
            class="select-item-symbol"
            @click="handleReduceHerbs(item)"
          >
            -
          </div>
          <input
            v-model='item.number'
            class='select-item-number'
            type='number'
            maxlength='4'
            oninput='if(value.length>4)value=value.slice(0,4)'
          />
          <div
            class='select-item-symbol'
            @click='handleAddHerbs(item)'
          >
            +
          </div>
        </div>
      </div>
      <div v-if='list.length === 0' class='select-item tips'>
        <span>试试这样搜，例如：</span>
        <span class='tips-example'>陈皮</span>
      </div>
      <!-- <div
        v-if='valueList.length !== 0 && list.length !== 0'
        class='select-item tips'
      >
        <span>以上是已经选好的药材</span>
      </div> -->
    </div>
  </div>
</template>

<script>
import { Cell } from 'mint-ui'
export default {
  props: ['isAdding'],
  data () {
    return {
      keyword: '',
      valueList: [],
      herbs: [],
      list: []
    }
  },
  created () {
    this.$axios.get('/static/mock/herbs.json')
      .then(res => {
        this.herbs = res.data
      })
  },
  updated () {
    this.$emit('listenSelectHerbs', this.valueList)
  },
  watch: {
    keyword () {
      this.list = []
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = this.valueList
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.herbs) {
          if (this.herbs[i].name.indexOf(this.keyword) > -1) {
            result.push(this.herbs[i])
          }
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleAddHerbs (item) {
      switch (true) {
        case item.number < 9999 :
          item.number++
          if (this.valueList.indexOf(item) === -1) {
            this.valueList.push(item)
          }
          break
        default :
          console.log('超出上限')
      }
    },
    handleReduceHerbs (item) {
      if (item.number > 0) {
        item.number--
      }
      if (item.number === 0 && this.valueList.includes(item)) {
        this.valueList.splice(this.valueList.indexOf(item), 1)
      }
    }
  },
  components: {
    Cell
  }
}
</script>

<style>
.select-warpper{
  width: 100%;
  border: 1px solid rgba(76, 175, 80, .2);
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
  background-color: rgba(76, 175, 80, .1);
  border-bottom: 1px solid rgba(76, 175, 80, .2);
}
.select-search{
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  text-align: center;
  border: 0px;
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
  font-family: '汉仪';
  border-bottom: 1px solid rgba(76,175,80,.2);
  background-color: #ffffff;
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
  font-size: 2rem;
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
  width: 4rem;
  font-size: 1.6rem;
  text-align: center;
  border: 1px solid rgba(76,175,80,.4);
}
.tips{
  display:flex;
  align-items: center;
  justify-content: center;
  font-family: '微软雅黑';
  font-size: 1.3rem;
  border: 0px;
}
.tips-example{
  font-size: 1.6rem;
  font-family: '楷体';
  font-weight: bold;
  color: #4CAF50;
}
@font-face {
  font-family: '汉仪';
  src: url('../../assets/font/hanyi.ttf');
}
</style>
