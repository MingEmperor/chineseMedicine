<template>
  <div class="container">
    <toolbar></toolbar>
    <div class="edit-warpper">
      <!-- error, success, warning -->
      <mt-field state='success' label="处方" placeholder="请输入处方名称（必填）"></mt-field>
      <mt-field label="备注" placeholder="请输入该处方的备注"></mt-field>
      <mt-button  class="edit-select" type="primary" @click="handleAddHerbs">
        添加药材
      </mt-button>
      <select-herbs v-show="isAdding" class="select-herbs"></select-herbs>
      <mt-button class="edit-select" type="primary"  @click="handleChangeVisible">
        相片/开启摄像头
      </mt-button>
      <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible">
        相片/开启摄像头
      </mt-actionsheet>
      <mt-button  class="edit-btn edit-select" type="primary" @click="handleConfrim">
        确认
      </mt-button>
    </div>
  </div>
</template>

<script>
import selectHerbs from '../common/selectHerbs'
import toolbar from '../common/toolbar'
import { Toast, Indicator } from 'mint-ui'
export default {
  data () {
    return {
      isAdding: false,
      sheetVisible: false,
      actions: [{
        name: '拍照',
        methods: ''
      }, {
        name: '从相册中选择',
        methods: ''
      }]
    }
  },
  methods: {
    handleAddHerbs () {
      Indicator.open()
      // setTimeout(console.log('1112'), 20000)
      window.setInterval(function () {
        Indicator.close()
      }, 500)
      this.isAdding = !this.isAdding
    },
    handleChangeVisible () {
      this.sheetVisible = true
    },
    handleConfrim () {
      Toast({
        message: '操作成功',
        duration: 1500,
        iconClass: 'icon icon-success'
      })
    }
  },
  components: {
    selectHerbs,
    toolbar
  }
}
</script>

<style scoped>
.edit-select{
  margin: .5rem 5%;
  width: 90%;
  height: 3.6rem;
  line-height: 3.6rem;
  text-align: center;
  font-size: 1.8rem;
  color: #4CAF50;
  background-color: #ffffff;
  border: 1px solid #4CAF50;
}
.select-herbs{
  margin: .5rem 5%;
  width: 90%;
}
.edit-btn{
  color: #ffffff;
  background-color: #4CAF50;
}
</style>
