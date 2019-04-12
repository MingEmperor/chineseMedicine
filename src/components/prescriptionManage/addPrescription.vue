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
      <select-herbs v-show="isAdding"></select-herbs>
      <mt-button  class="edit-select" type="primary"  @click="qwer">
        添加相片
      </mt-button>
      <mt-button  class="edit-btn edit-select" type="primary" @click="handleConfrim">
        确认添加
      </mt-button>
    </div>
  </div>
</template>

<script>
import selectHerbs from '../common/selectHerbs'
import toolbar from '../common/toolbar'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      isAdding: false
    }
  },
  methods: {
    handleAddHerbs () {
      // Indicator.open('加载中...')
      this.isAdding = !this.isAdding
    },
    qwer () {

    },
    handleConfrim () {
      Toast({
        message: '操作成功',
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
.edit-btn{
  color: #ffffff;
  background-color: #4CAF50;
}
</style>
