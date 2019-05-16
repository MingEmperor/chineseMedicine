<template>
  <div class="container">
    <header>
      注册账号
    </header>
    <mt-field
      label='用户名'
      placeholder="请输入用户名"
      v-model='userTel'
      type='tel'
    ></mt-field>
    <mt-field
      label='密码'
      placeholder="请输入密码"
      v-model='userPassword'
      type='password'
    ></mt-field>
    <mt-field
      label='确认密码'
      placeholder="请确认密码"
      v-model='confrimPassword'
      type='password'
    ></mt-field>
    <mt-field
      label='邮箱'
      placeholder="请输入邮箱"
      v-model='userEmail'
      type='email'
    ></mt-field>
    <mt-field
      label='手机号'
      placeholder="请输入手机号"
      v-model='userSaleTel'
      type='tel'
    ></mt-field>
    <mt-button
      class="login-btn"
      type="primary"
      @click="handleRegister"
    >
      注册
    </mt-button>
    <mt-button
      class='register-btn'
      type="primary"
      @click="handleLogin"
      plain
    >
      返回登录
    </mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data () {
    return {
      userTel: '',
      userPassword: '',
      confrimPassword: '',
      userEmail: '',
      userSaleTel: ''
    }
  },
  methods: {
    handleRegister () {
      if (this.userTel !== '' && this.userPassword !== '') {
        if (this.userPassword === this.confrimPassword) {
          this.$axios.post('/ChineseMedicine/user/register.do', {
            username: this.userTel,
            password: this.userPassword,
            email: this.userEmail,
            telephone: this.userSaleTel
          })
            .then(res => {
              console.log(res)
              if (res.data.success) {
                Toast({
                  message: '注册成功',
                  iconClass: 'icon icon-success'
                })
                this.$router.replace({
                  name: 'Login'
                })
              } else {
                console.log('注册失败')
                Toast({
                  message: '注册失败，请重试',
                  iconClass: 'icon icon-success'
                })
              }
            })
        } else {
          Toast({
            message: '两次输入的密码不正确，请确认密码',
            iconClass: 'icon icon-success'
          })
        }
      } else {
        Toast({
          message: '请检查您的信息是否为空',
          iconClass: 'icon icon-success'
        })
      }
    },
    handleLogin () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -15rem;
  margin-left: -13rem;
  width: 26rem;
  height: 36rem;
}
header{
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-size: 1.8rem;
}
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
.login-btn{
  margin: .5rem 5%;
  width: 90%;
  height: 3.6rem;
  line-height: 3.6rem;
  text-align: center;
  font-size: 1.8rem;
  color: #ffffff;
  background-color: #4CAF50;
}
.register-btn{
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
</style>
