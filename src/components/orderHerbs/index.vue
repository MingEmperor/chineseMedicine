<template>
  <div>
    <toolbar :title='title'></toolbar>
    <div class="tel">
      当前供应商电话：{{tel}}
    </div>
    <purchasing-record></purchasing-record>
    <select-herbs></select-herbs>
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
}
</style>
