<template>
  <div>
    <toolbar :title='title'></toolbar>
    <div class="tel">
      当前供应商电话：{{tel}}
    </div>
    <purchasing-record
      :recordsTime='recordsTime'
      :records='records'
    >
    </purchasing-record>
    <select-herbs
      class="select-herbs-wapper"
      :isAdding='true'
      v-on:listenSelectHerbs='showValueList'
    >
    </select-herbs>
    <mt-button
      class="select-btn-confrim"
      type="primary"
      @click="handleAdd"
    >
      订购选中药材
    </mt-button>
    <a ref="makeCall" style="opcity:0"></a>
  </div>
</template>

<script>
import toolbar from '../common/toolbar'
import purchasingRecord from '../common/purchasingRecords'
import selectHerbs from '../common/selectHerbs'
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      title: '药材订购',
      tel: '15234804752',
      order: '',
      makeCall: '',
      valueList: [],
      recordsTime: '',
      records: []
    }
  },
  created () {
    this.$axios.post('ChineseMedicine/medicine/lateBuy.do')
      .then(res => {
        if (res.data) {
          this.records = res.data
          this.recordsTime = this.format(res.data[0].recordstime)
        } else {
          console.log('数据未获取到')
        }
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
    showValueList (data) {
      this.valueList = data
    },
    handleAdd () {
      this.handleSpellName()
      MessageBox({
        title: '供应商将收到如下短信，确认订购吗？',
        message: this.order,
        confirmButtonText: '确认订购',
        confirmButtonClass: 'confirm-btn',
        showCancelButton: true
      }).then(action => {
        this.handleMakeCall()
      })
    },
    handleSpellName () {
      if (!this.order) {
        this.order += '【上医堂】你好，我需要采购如下药材：' + ' \n'
        this.valueList.forEach(el => {
          this.order += el.name + ':' + el.number + '克' + ' \n'
        })
      }
    },
    handleMakeCall () {
      this.makeCall = this.$refs.makeCall
      let u = navigator.userAgent
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
      // android终端
      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
      if (isiOS) {
        this.makeCall.href = 'sms://' + this.tel + '?body=' + this.order
      } else if (isAndroid) {
        this.makeCall.href = 'sms://' + this.tel + '&body=' + this.order
      }
      this.makeCall.click()
      this.$axios.post('ChineseMedicine/medicine/buyMedicine.do', {
        mas: this.valueList
      })
        .then(console.log('成功'))
    }
  },
  components: {
    toolbar,
    purchasingRecord,
    selectHerbs,
    MessageBox
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
.confirm-btn{
  color: #4CAF50;
}
</style>
