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
        placeholder='这里输入想查询的处方..'
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
        <div class='prescription-list-date'>
          {{item.purchaseDate}}
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
      keyword: '',
      timer: null,
      list: [],
      purchaseList: [{
        id: 1,
        title: '七月七日诊ni先生',
        purchaseDate: '2019-07-01'
      }, {
        id: 2,
        title: '七月七日诊hao先生',
        purchaseDate: '2019-07-01'
      }, {
        id: 3,
        title: '七月七日诊sha先生',
        purchaseDate: '2019-07-01'
      }, {
        id: 4,
        title: '七月七日诊de先生',
        purchaseDate: '2019-07-01'
      }, {
        id: 5,
        title: '七月七日诊en先生',
        purchaseDate: '2019-07-01'
      }]
    }
  },
  created () {
    this.$axios.post('/ChineseMedicine/recipe/allRecipe.do')
      .then(res => {
        this.purchaseList = res.data
        this.list = this.purchaseList
      })
  },
  watch: {
    keyword () {
      this.list = []
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = this.purchaseList
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.purchaseList) {
          if (this.purchaseList[i].title.indexOf(this.keyword) > -1) {
            result.push(this.purchaseList[i])
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
    addPrescription () {
      this.$router.push({
        name: 'AddPrescription'
      })
    },
    handleDetail (id) {
      this.$router.push({
        name: 'Prescriptions',
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
  border: 1px solid #dddddd;
}
.prescription-list-title{
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: .5rem;
}
.prescription-list-date{
  font-size: 1.15rem;
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
