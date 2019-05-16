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
    <div class='info-warpper'>
      <div v-if='isEditing'>
        <mt-field
          label='用户名'
          placeholder='请输入用户名'
          v-model='username'
        ></mt-field>
        <mt-field
          label='主治领域'
          placeholder='请输入主治领域'
          v-model='major'
        ></mt-field>
        <mt-field
          label='从医日期'
          placeholder='请输入从医日期'
          v-model='udate'
        ></mt-field>
        <mt-field
          label='性别'
          placeholder='请输入性别'
          v-model='sex'
        ></mt-field>
        <mt-field
          label='邮箱'
          placeholder='请输入邮箱'
          v-model='email'
        ></mt-field>
        <mt-field
          label='手机号'
          placeholder='请输入手机号'
          v-model='telephone'
        ></mt-field>
        <mt-field
          label='密码'
          placeholder='请输入密码'
          v-model='telephone'
          type='password'
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
          @click.native="handleEditcell"
          is-link
        >
          <span>
            {{item.info}}
          </span>
        </mt-cell>
      </div>
      <mt-button
        v-if="!isEditing"
        class="info-btn-exit info-btn"
        type="primary"
      >
        退出当前账号
      </mt-button>
    </div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data () {
    return {
      isEditing: false,
      sheetVisible: false,
      pickerVisible: true,
      username: '',
      password: '',
      email: '',
      telephone: '',
      sex: '',
      udate: '',
      major: '',
      actions: [{
        name: '拍照',
        methods: ''
      }, {
        name: '从相册中选择',
        methods: ''
      }],
      personInfo: [{
        id: 1,
        title: '用户名'
      }, {
        id: 2,
        title: '主治领域'
      }, {
        id: 3,
        title: '从医日期'
      }, {
        id: 4,
        title: '性别'
      }, {
        id: 5,
        title: '邮箱'
      }, {
        id: 6,
        title: '药厂供应商'
      }]
    }
  },
  methods: {
    handleEditcell () {
      this.isEditing = !this.isEditing
    },
    handleEdit () {
      this.$axios.post('ChineseMedicine/user/updateUserInfo.do', {
        username: this.username,
        password: this.password,
        email: this.email,
        telephone: this.telephone,
        sex: this.sex,
        udate: this.udate,
        major: this.major
      })
        .then(res => {
          console.log(res.data)
          Toast({
            message: res.data.message,
            iconClass: 'icon icon-success'
          })
          this.isEditing = !this.isEditing
        })
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
  margin: 1.5rem 5%;
  width: 90%;
  height: 3.6rem;
  line-height: 3.6rem;
  text-align: center;
  font-size: 1.8rem;
  color: #ffffff;
  background-color: #4CAF50;
}
.info-btn-exit{
  background-color: rgb(175, 76, 76);
}
</style>
