<template>
  <div class="container">
    <div class="bg-img">
      <div class="info-photo" @click="handleChangeVisible">
        <img class='info-photo-img' src='../../assets/img/userPhoto.jpg'/>
      </div>
      <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible"
      >
        相片/开启摄像头
      </mt-actionsheet>
    </div>
    <div class="info-warpper" >
      <div
        v-if="isEditing"
        v-for='item in personInfo'
        :key='item.id'
      >
        <mt-field
          :label="item.title"
          placeholder="请输入内容"
          :value="item.info"
        ></mt-field>
      </div>
      <mt-button
        v-if="isEditing"
        class="info-btn"
        type="primary"
        @click="handleEdit"
      >
        确认
      </mt-button>
      <div
        v-if="!isEditing"
        v-for='item in personInfo'
        :key='item.id'
      >
        <mt-cell
          :title="item.title"
          @click.native="handleEdit"
          is-link
        >
          <span>
            {{item.info}}
          </span>
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isEditing: false,
      sheetVisible: false,
      pickerVisible: true,
      actions: [{
        name: '拍照',
        methods: ''
      }, {
        name: '从相册中选择',
        methods: ''
      }],
      personInfo: [{
        id: 1,
        title: '用户名',
        info: '明血如照'
      }, {
        id: 2,
        title: '主治领域',
        info: '中医'
      }, {
        id: 3,
        title: '从医日期',
        info: '2019-04-13'
      }, {
        id: 4,
        title: '性别',
        info: '男'
      }, {
        id: 5,
        title: '邮箱',
        info: '861464751@qq.com'
      }, {
        id: 6,
        title: '药厂供应商',
        info: '15498671243'
      }]
    }
  },
  methods: {
    handleEdit () {
      this.isEditing = !this.isEditing
    },
    handleChangeVisible () {
      this.sheetVisible = true
    }
  }
}
</script>

<style scoped>
.bg-img{
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 33.37%;
  background-color: #4CAF50;
}
.info-warpper{
  margin: 3.3rem auto;
}
.info-photo{
  position: absolute;
  bottom: -3rem;
  left: 50%;
  margin-left: -3rem;
  padding: .1rem;
  width: 6rem;
  height: 6rem;
  border-radius: 3.2rem;
  background-color: #ffffff;
}
.info-photo-img{
  border-radius: 3.2rem;
  width: 100%;
}
.info-btn{
  margin: .5rem 5%;
  width: 90%;
  height: 3.6rem;
  line-height: 3.6rem;
  text-align: center;
  font-size: 1.8rem;
  color: #ffffff;
  background-color: #4CAF50;
}
</style>
