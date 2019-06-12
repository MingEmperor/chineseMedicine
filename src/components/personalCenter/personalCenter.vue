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
          label='密码'
          placeholder='请输入密码'
          v-model='password'
          type='password'
        ></mt-field>
        <mt-field
          label='从医日期'
          type='date'
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
        <!-- <mt-field
          label='供应商电话'
          placeholder='请输入供应商电话'
          v-model='major'
        ></mt-field> -->
      </div>
      <mt-button
        v-if="isEditing"
        class="info-btn"
        type="primary"
        @click="handleEdit"
      >
        确认
      </mt-button>
      <div v-if="!isEditing">
        <mt-cell
          title='用户名'
          @click.native="handleEditcell"
          is-link
        >
          <span>
            {{username}}
          </span>
        </mt-cell>
        <mt-cell
          title='密码'
          @click.native="handleEditcell"
          is-link
        >
          <span>
            {{password}}
          </span>
        </mt-cell>
        <mt-cell
          title='从医日期'
          @click.native="handleEditcell"
          is-link
        >
          <span>
            {{udate}}
          </span>
        </mt-cell>
        <mt-cell
          title='性别'
          @click.native="handleEditcell"
          is-link
        >
          <span>
            {{sex}}
          </span>
        </mt-cell>
        <mt-cell
          title='邮箱'
          @click.native="handleEditcell"
          is-link
        >
          <span>
            {{email}}
          </span>
        </mt-cell>
        <mt-cell
          title='手机号'
          @click.native="handleEditcell"
          is-link
        >
          <span>
            {{telephone}}
          </span>
        </mt-cell>
        <!-- <mt-cell
          title='供应商电话'
          @click.native="handleEditcell"
          is-link
        >
          <span>
            {{supplier}}
          </span>
        </mt-cell> -->
      </div>
      <mt-button
        v-if="!isEditing"
        class="info-btn-exit info-btn"
        type="primary"
        @click='handleExit'
      >
        退出当前账号
      </mt-button>
    </div>
    <input
      ref='makeCall'
      type='file'
      value=''
      id='file'
      style='display:none;'
      @change='handleUpload'
    />
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
      supplier: '',
      actions: [{
        name: '拍照',
        method: ''
      }, {
        name: '从相册中选择',
        method: this.openFile
      }]
    }
  },
  created () {
    this.$axios.get('ChineseMedicine/user/user.do')
      .then(res => {
        console.log(res.data)
        this.username = res.data.username
        this.password = res.data.password
        this.sex = res.data.sex === 1 ? '男' : '女'
        this.email = res.data.email
        this.udate = this.format(res.data.udate)
        this.telephone = res.data.telephone
        this.supplier = res.data.supplier
      })
  },
  methods: {
    add0 (m) {
      return m < 10 ? '0' + m : m
    },
    format (timeStamp) {
      let time = new Date(timeStamp)
      let y = time.getFullYear()
      let m = time.getMonth() + 1
      let d = time.getDate()
      return y + '-' + this.add0(m) + '-' + this.add0(d)
    },
    handleEditcell () {
      this.isEditing = !this.isEditing
    },
    handleEdit () {
      this.$axios.post('ChineseMedicine/user/updateUserInfo.do', {
        username: this.username,
        password: this.password,
        email: this.email,
        telephone: this.telephone,
        sex: this.sex === '男' ? 1 : 0,
        udate: this.udate,
        supplier: this.supplier
      })
        .then(res => {
          console.log(res.data)
          Toast({
            message: res.data.message,
            iconClass: 'iconfont icon-29'
          })
          this.isEditing = !this.isEditing
        })
    },
    handleExit () {
      this.$router.replace({
        name: 'Login'
      })
    },
    handleChangeVisible () {
      this.sheetVisible = true
    },
    openFile () {
      this.$refs.makeCall.click()
    },
    handleUpload (e) {
      let formData = new FormData()
      formData.append('file', e.target.files[0])
      let url = 'ChineseMedicine/user/upload.do'
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      this.$axios.post(url, formData, config)
        .then(res => {
          this.photoUrl = res.data.url
        })
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
