<template>
  <div class='container'>
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
          <p
            class='presriptions-use-item'
            v-for='item in purchase.herbs'
            :key='item.id'
          >
            {{item.name}} - {{item.number}}g
          </p>
        </div>
        <span class="presriptions-desc-tips">
          备注:
        </span>
        <p class="presriptions-desc"
          >{{purchase.desc}}
        </p>
        <div class="presriptions-img">
          <img
            :src='purchase.imgUrl'
            style='width:100%;'
          />
        </div>
      </div>
    </div>
    <mt-button
      class="delete-btn"
      type="primary"
      @click='handleDelete'
    >
        删除本张处方
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
      title: '处方详情',
      purchase: {
        id: 1,
        title: '',
        date: '',
        herbs: [],
        desc: '',
        imgUrl: ''
      }
    }
  },
  created () {
    this.$axios.get('ChineseMedicine/recipe/recipe.do?id=' + this.$route.params.id)
      .then(res => {
        if (res.data) {
          this.purchase = res.data
          console.log(res.data)
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
    },
    handleDelete () {
      MessageBox({
        title: '提示',
        message: '确认删除本条处方？',
        confirmButtonText: '确认',
        confirmButtonClass: 'confirm-btn',
        showCancelButton: true
      }).then(action => {
        this.$axios.get('ChineseMedicine/recipe/deleteRecipe?id=' + this.$route.params.id)
          .then(res => {
            Toast({
              message: '该处方已删除',
              duration: 1500,
              iconClass: 'iconfont icon-29'
            })
          })
        this.$router.back({
          name: 'Prescriptions',
          params: {
            item: this.purchase
          }
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
.presriptions-warpper {
  position: relative;
  width: 96%;
  margin: 2rem auto;
  border-top: 1px solid #666;
}
.presriptions-title {
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
.presriptions-title-text {
  font-size: 1.8rem;
  margin-bottom: .5rem;
}
.presriptions-title-date {
  font-size: 1.3rem;
}
.presriptions-use {
  width: 96%;
  margin: 1rem auto;
  min-height: 6rem;
  padding-top: 1.6rem;
}
.presriptions-use-item {
  display: inline-block;
  min-width: 6.6rem;
  margin: .5rem .3rem;
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
.presriptions-desc {
  display: flex;
  flex-wrap: wrap;
  white-space: pre-line;
  margin-top: .5rem;
  min-height: 3rem;
  line-height: 3rem;
  font-size: 1.3rem;
  padding-left: .5rem;
  color: #666;
}
.presriptions-desc-tips {
  font-family: '汉仪';
  font-size: 2rem;
  border-radius: .35rem;
  border: 1px solid #333;
}
.presriptions-img {
  margin: .8rem auto;
  width: 96%;
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
.float-add {
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
.float-add:hover {
  width: 6rem;
  height: 6rem;
  line-height: 6rem;
  border-radius: 3rem;
}
@font-face {
  font-family: '汉宋';
  src: url('../../assets/font/汉宋.otf');
}
@font-face {
  font-family: '汉仪';
  src: url('../../assets/font/hanyi.ttf');
}
</style>
