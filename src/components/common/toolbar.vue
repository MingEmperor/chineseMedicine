<template>
  <div class="toolbar-index">
    <div class="toolbar-back" @click="handleBack">
      <img class="toolbar-back-icon" src="../../assets/img/返回.png" />
    </div>
    <div class="toolbar-btn">名称</div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleBack () {
      this.$router.back()
    }
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
</style>
