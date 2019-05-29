<template>
  <div class="container">
    <div class="toolbar-index">
      <div class="toolbar-back" @click="handleBack">
        <img class="toolbar-back-icon" src="../../assets/img/返回.png" />
      </div>
      <input
        v-model='keyword'
        class='toolbar-input'
        type='text'
        placeholder='输入想查询的周报..'
      />
    </div>
    <div class='prescription-list-warpper'>
      <div
        v-for='item in list'
        :key='item.id'
        class='prescription-list-item'
        @click='handleDetail(item.id)'
      >
        <div class='prescription-list-title'>
          {{item.title}}
        </div>
        <div class='prescription-list-img'>
          <img :src='item.imgUrl' />
        </div>
        <div class='prescription-list-author'>
          {{item.author}}
        </div>
        <div class='prescription-list-date'>
          {{item.reviewDate}}
        </div>
      </div>
    </div>

    <div class="float-add" @click="addWeeklyReview">
      +
    </div>
  </div>
</template>

<script>
import purchasingRecord from '../common/purchasingRecords'
export default {
  data () {
    return {
      keyword: '',
      timer: null,
      list: [],
      reviewList: []
      // reviewList: [{
      //   id: 1,
      //   title: '关于伤寒论的探究浅析',
      //   author: '丘处机',
      //   reviewDate: '2019-07-01',
      //   imgUrl: require('../../assets/img/shanghanlun.jpg')
      // }, {
      //   id: 2,
      //   title: '六阳病症浅谈',
      //   author: '王重阳',
      //   reviewDate: '2019-08-06',
      //   imgUrl: require('../../assets/img/shanghanlun.jpg')
      // }, {
      //   id: 3,
      //   title: '微观角度分析中成药',
      //   author: '马钰',
      //   reviewDate: '2019-07-01',
      //   imgUrl: require('../../assets/img/shanghanlun.jpg')
      // }, {
      //   id: 4,
      //   title: '中医与周易关系考究',
      //   author: '王处一',
      //   reviewDate: '2019-07-01',
      //   imgUrl: require('../../assets/img/shanghanlun.jpg')
      // }, {
      //   id: 5,
      //   title: '五行对应草药成分',
      //   author: '刘处玄',
      //   reviewDate: '2019-07-01',
      //   imgUrl: require('../../assets/img/shanghanlun.jpg')
      // }]
    }
  },
  created () {
    this.$axios.get('ChineseMedicine/report/allReport.do')
      .then(res => {
        console.log(res.data)
        this.reviewList = res.data
        this.list = this.reviewList
      })
  },
  watch: {
    keyword () {
      this.list = []
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = this.reviewList
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.reviewList) {
          if (this.reviewList[i].title.indexOf(this.keyword) > -1) {
            result.push(this.reviewList[i])
          }
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleBack () {
      this.$router.replace({
        name: 'Home'
      })
    },
    addWeeklyReview () {
      this.$router.push({
        name: 'AddWeeklyReview'
      })
    },
    handleDetail (id) {
      this.$router.push({
        name: 'WeeklyReview',
        params: {
          id: id
        }
      })
    }
  },
  components: {
    purchasingRecord
  }
}
</script>

<style scoped>
.container{
  margin-bottom:3rem;
}
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
  width: 75%;
  height: 2.8rem;
  line-height: 2.8rem;
  margin-left: 2rem;
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
.prescription-list-warpper{
  margin: 0 auto;
  width: 92%;
}
.prescription-list-item{
  margin: .8rem 0;
  padding: 1.8rem;
  border-radius: .35rem;
  border-bottom: 1px solid #aaaaaa;
}
.prescription-list-title{
  height: 2rem;
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: .5rem;
}
.prescription-list-img{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: .8rem;
}
.prescription-list-img > img{
  width: 90%;
}
.prescription-list-author{
  margin-top: .5rem;
  font-size: 1.5rem;
  color: #333;
}
.prescription-list-date{
  margin-top: .5rem;
  font-size: 1.25rem;
  color: #aaa;
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
