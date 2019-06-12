<template>
  <div class='container'>
    <toolbar :title='title'></toolbar>
    <div class='edit-warpper'>
      <mt-field
        v-model='prescriptionName'
        :state='state'
        label='处方'
        placeholder='请输入处方名称（必填）'
      ></mt-field>
      <mt-field
        v-model="prescriptionNote"
        class='edit-content'
        label='备注'
        placeholder="请输入该处方的备注"
        type='textarea'
      ></mt-field>
      <mt-button
        class='edit-select'
        type='primary'
        @click='handleAddHerbs'
      >
        添加药材
      </mt-button>
      <select-herbs
        v-show='isAdding'
        class='select-herbs'
        v-on:listenSelectHerbs='showValueList'
      ></select-herbs>
      <mt-button
        class='edit-select'
        type='primary'
        @click='handleChangeVisible'
      >
        相片/开启摄像头
      </mt-button>
      <mt-actionsheet
        :actions='actions'
        v-model='sheetVisible'
      >
      </mt-actionsheet>
      <video
        ref='video'
        class='edit-video'
        autoplay='autoplay'
      ></video>
      <canvas
        ref='canvas'
        width='500'
        height='500'
        class='edit-video'
      ></canvas>
      <mt-button
        v-show='isTaking'
        class='edit-select'
        type='primary'
        @click='takePhoto'
      >
        拍照
      </mt-button>
      <mt-button
        class='edit-btn edit-select'
        type='primary'
        @click='handleConfrim'
      >
        确认
      </mt-button>
    </div>
    <a ref="makeCall" style="opcity:0"></a>
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
import selectHerbs from '../common/selectHerbs'
import toolbar from '../common/toolbar'
import { Toast, Indicator } from 'mint-ui'
export default {
  data () {
    return {
      img: '',
      photoUrl: '',
      state: '',
      title: '新增处方',
      prescriptionName: '',
      prescriptionNote: '',
      isAdding: false,
      isTaking: false,
      valueList: [],
      sheetVisible: false,
      mediaStreamTrack: null,
      actions: [{
        name: '拍照',
        method: this.openMedia
      }, {
        name: '从相册中选择',
        method: this.openFile
      }]
    }
  },
  watch: {
    prescriptionName: 'handleState'
  },
  methods: {
    showValueList (data) {
      this.valueList = data
    },
    handleAddHerbs () {
      Indicator.open()
      window.setInterval(function () {
        Indicator.close()
      }, 500)
      this.isAdding = !this.isAdding
    },
    handleChangeVisible () {
      this.sheetVisible = true
    },
    handleConfrim () {
      if (!this.prescriptionName) {
        this.state = 'error'
        Toast('请填写处方名称')
      } else if (this.valueList.length === 0) {
        Toast('请选择并添加药材')
      } else {
        this.$axios.post('ChineseMedicine/recipe/addRecipe.do', {
          prescriptionName: this.prescriptionName,
          prescriptionNote: this.prescriptionNote,
          valueList: this.valueList,
          photoUrl: 'http://39.96.32.35:8080/ChineseMedicine/recipe/' + this.photoUrl
        })
          .then(res => {
            if (res.data.success) {
              Toast({
                message: '操作成功',
                duration: 1500,
                iconClass: 'iconfont icon-29'
              })
              this.$router.back()
            }
          })
      }
    },
    handleState () {
      if (this.prescriptionName) {
        this.state = 'success'
      } else {
        this.state = 'error'
      }
    },
    openFile () {
      this.$refs.makeCall.click()
    },
    openMedia () {
      this.isTaking = true
      this.$refs.canvas.style.display = 'none'
      let constraints = {
        video: { width: 500, height: 500 },
        audio: true
      }
      // 获得video摄像头
      let video = this.$refs.video
      video.style.display = 'block'
      let promise = navigator.mediaDevices.getUserMedia(constraints)
      promise.then((mediaStream) => {
        this.mediaStreamTrack = typeof mediaStream.stop === 'function' ? mediaStream : mediaStream.getTracks()[1]
        video.srcObject = mediaStream
        video.play()
      })
    },
    // 拍照
    takePhoto () {
      this.isTaking = false
      // 获得Canvas对象
      let video = this.$refs.video
      let canvas = this.$refs.canvas
      video.style.display = 'none'
      canvas.style.display = 'block'
      let ctx = canvas.getContext('2d')
      ctx.drawImage(video, 0, 0, 500, 500)

      // toDataURL  ---  可传入'image/png'---默认, 'image/jpg'
      this.img = this.$refs.canvas.toDataURL()
      // 这里的img就是得到的图片
      console.log('img-----', this.img)
      // document.getElementById('imgTag').src = img
      this.mediaStreamTrack.stop()
      let formData = new FormData()
      formData.append('file', this.img)
      let url = 'ChineseMedicine/recipe/upload.do'
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      this.$axios.post(url, formData, config)
        .then(res => {
          console.log(res)
        })
    },
    handleUpload (e) {
      let formData = new FormData()
      formData.append('file', e.target.files[0])
      let url = 'ChineseMedicine/recipe/upload.do'
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
.select-herbs{
  margin: .5rem 5%;
  width: 90%;
}
.edit-btn{
  color: #ffffff;
  background-color: #4CAF50;
}
.edit-video{
  display: none;
  margin: 0 auto;
  width: 94%;
  border-radius: .35rem;
}
.edit-content >>> .mint-field-core{
  height: 25rem;
}
</style>
