<template>
  <div>
    <toolbar></toolbar>
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

</style>
