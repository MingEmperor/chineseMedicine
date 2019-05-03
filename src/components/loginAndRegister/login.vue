<template>
  <div class="container">
    <header>
      欢迎使用本系统
    </header>
    <mt-field
      label='手机号'
      placeholder="请输入手机号"
      :value='userTel'
    ></mt-field>
    <mt-field
      label='密码'
      placeholder="请输入密码"
      :value='userPassword'
      type='password'
    ></mt-field>
    <mt-button
      class="login-btn"
      type="primary"
      @click="handleLogin"
    >
      登录
    </mt-button>
    <mt-button
      class='register-btn'
      type="primary"
      @click="handleRegister"
      plain
    >
      注册
    </mt-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userTel: '',
      userPassword: ''
    }
  },
  methods: {
    handleLogin () {
      this.$router.replace({
        name: 'Home'
      })
    },
    handleRegister () {
      this.$router.replace({
        name: 'Register'
      })
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
  height: 22rem;
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
