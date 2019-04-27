<template>
  <div>
    <toolbar :title='title'></toolbar>
    <div class="tel">
      当前供应商电话：{{tel}}
    </div>
    <purchasing-record></purchasing-record>
    <select-herbs class="select-herbs-wapper" :isAdding='true'></select-herbs>
    <mt-button class="select-btn-confrim" type="primary"  @click="handleAdd">
      订购选中药材
    </mt-button>
  </div>
</template>

<script>
import toolbar from '../common/toolbar'
import purchasingRecord from '../common/purchasingRecords'
import selectHerbs from '../common/selectHerbs'
export default {
  data () {
    return {
      title: '药材订购',
      tel: '15234804752'
    }
  },
  methods: {
    handleAdd () {
      console.log('')
    }
  },
  components: {
    toolbar,
    purchasingRecord,
    selectHerbs
  }
}
</script>

<style scoped>
.tel{
  width: 100%;
  height: 3.5rem;
  line-height: 3.5rem;
  font-size: 1.6rem;
  text-align: center;
  color: rgb(0,122,204)
}
.select-btn-confrim{
  margin: 1.5rem 5%;
  width: 90%;
  height: 3.6rem;
  line-height: 3.6rem;
  text-align: center;
  font-size: 1.8rem;
  color: #ffffff;
  background-color: #4CAF50;
}
.select-herbs-wapper{
  margin: 0 auto;
  width: 92%;
}
</style>
