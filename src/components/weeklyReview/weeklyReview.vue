<template>
  <div class="container" style="margin-bottom:3rem;">
    <!-- 标题、日期、所用药材、备注、图片 -->
    <toolbar :title="purchase.title"></toolbar>
    <div class="presriptions-warpper">
      <div class="presriptions-item">
        <div class="presriptions-title">
          <span class="presriptions-title-text">
            {{purchase.title}}
          </span>
          <span class="presriptions-title-date">
            {{purchase.date}}
          </span>
        </div>
        <div class="presriptions-desc">
          {{purchase.desc}}
        </div>
        <div class="presriptions-img">
          <img class="" :src='purchase.imgUrl' style='width:100%;'/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import toolbar from '../common/toolbar'
import purchasingRecord from '../common/purchasingRecords'
export default {
  data () {
    return {
      purchase: {
        id: 1,
        title: '关于伤寒论的探究浅析',
        date: '2018-07-07',
        desc: '《伤寒论》原书曾经西晋王叔和整理编次，在五代十国时期已经处于一线单传、存亡继绝的危机状态。此书在北宋国家书府秘藏八九十年，嘉佑年间（1056-1063），北宋校正医书局成立，选高继冲进献本为底本，由孙奇、林亿等校定，于1065年由朝廷诏命国子监雕版刊行，名为定本《伤寒论》，结束了从汉末至宋凡八百余年传本歧出、条文错乱的局面。金皇统四年即南宋绍兴十四年（1144）成无己《注解伤寒论》刊行，有详注，逐渐取代白文本《伤寒论》，白文本南宋未再翻刻。至元代，白文本《伤寒论》除少数藏书家偶有其书外，社会上已无该书。明万历二十七年（1599），江苏常熟藏书家赵开美偶然得到北宋刻本《伤寒论》十卷，请优秀刻工将此书收刻于《仲景全书》中。北宋原刻本旋即丢失，现今仍在留存的只有赵开美本。赵开美本逼真宋版，后世尊称赵开美本为《宋本伤寒论》。赵开美本今存五部。《伤寒论》在国外亦有广泛影响。除此之外，其他还有《唐本伤寒论》（唐·孙思邈）《宋本伤寒论》（宋·高继冲）《金本注解伤寒论》（金·成无已）《宋本伤寒论》（明·赵开美）《康治本伤寒论》（日本）《康平本伤寒论》（日本）《桂林本伤寒论》《敦煌本伤寒论》（残卷）等版本。',
        imgUrl: require('../../assets/img/shanghanlun.jpg')
      }
    }
  },
  methods: {
    handleBack () {
      this.$router.replace({
        name: 'Home'
      })
    },
    addPrescription () {
      this.$router.push({
        name: 'AddPrescription'
      })
    }
  },
  components: {
    toolbar,
    purchasingRecord
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
.presriptions-warpper{
  position: relative;
  width: 96%;
  margin: 2rem auto;
  border: 1px dashed #aaa;
}
.presriptions-title{
  position: absolute;
  display: flex;
  justify-content: space-around;
  top: -1.5rem;
  left: 2rem;
  height: 3rem;
  line-height: 3rem;
  background-color: #ffffff;
}
.presriptions-title-text{
  font-size: 1.8rem;
  margin-right: 2rem;
}
.presriptions-title-date{
  font-size: 1.3rem;
}
.presriptions-use{
  width: 96%;
  margin: 0 auto;
  min-height: 6rem;
  padding-top:1.8rem;
  border-bottom: 1px dashed #e3e3e3;
}
.presriptions-desc{
  margin-top: 1rem;
  padding: 0 .8rem;
  min-height: 3rem;
  line-height: 3rem;
  font-size: 1.3rem;
  color: #909399;
}
.presriptions-img{
  margin: .8rem auto;
  width: 96%;
  border: 1px solid #e3e3e3;
}
.float-add{
  z-index: 999;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 1rem;
  margin: 0 auto;
  width: 6rem;
  height: 6rem;
  line-height: 6rem;
  border-radius: 3rem;
  text-align: center;
  border-radius: 3rem;
  color: #ffffff;
  font-size: 2.3rem;
  background-color: #4CAF50;
}
.float-add:hover{
  width: 6rem;
  height: 6rem;
  line-height: 6rem;
  border-radius: 3rem;
}
</style>
