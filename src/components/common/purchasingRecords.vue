<template>
  <div class='container'>
    <div class='purchase-warpper'>
      <div class='purchase-title-warpper'>
        <div class='purchase-title-static'>最近采购</div>
        <div class='purchase-title-time'>{{recordstime}}</div>
      </div>
      <ul class='purchase-records-warpper'>
        <li
          v-for='item in records'
          :key='item.id'
          class='purchase-records-item'
          :class="{'purchase-records-item-last ': item.id === records.length}"
        >
          <div class='item-name'>{{item.name}}</div>
          <img class="item-img" src='../../assets/img/箭头.png'/>
          <div class='item-dose'>{{item.dose}}g</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recordstime: '2019-04-09',
      records: [{
        id: 1,
        name: '三七',
        dose: '34'
      }, {
        id: 2,
        name: '当归',
        dose: '34'
      }, {
        id: 3,
        name: '三七',
        dose: '34'
      }, {
        id: 4,
        name: '当归',
        dose: '34'
      }]
    }
  }
}
</script>

<style scoped>
li {
  list-style:none;
}
.purchase-warpper {
  margin: 3rem auto;
  width: 90%;
  border: .1rem solid #4CAF50;
  border-radius: 0 0 .35rem .35rem;
}
.purchase-title-warpper {
  margin-left: 1.8rem;
  margin-top: -2rem;
  padding-top: .4rem;
  width: 10rem;
  height: 4rem;
  text-align: center;
  font-size: 1.3rem;
  background-color: #ffffff;
}
.purchase-title-static {
  color: #4CAF50;
  font-family:'楷体';
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: .8rem;
}
.purchase-records-warpper {
  margin:0 auto;
  width: 92%;
}
.purchase-records-item {
  display: flex;
  justify-content: space-around;
  margin: .6rem auto;
  width: 100%;
  height: 2.8rem;
  line-height: 2.8rem;
  font-size: 1.4rem;
  border-bottom: 1px solid #efefef;
}
.purchase-records-item-last {
  border-bottom: 0;
}
.item-img{
  margin: auto 0;
  width: 1rem;
  height: 1rem;
}
</style>
