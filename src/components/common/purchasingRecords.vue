<template>
  <div class='container'>
    <div class='purchase-warpper'>
      <div class='purchase-title-warpper'>
        <div class='purchase-title-static'>
          最近采购
        </div>
        <div class='purchase-title-time'>
          {{recordsTime}}
        </div>
      </div>
      <ul class='purchase-records-warpper'>
        <li
          v-for='item in records'
          :key='item.id'
          class='purchase-records-item'
          :class="{'purchase-records-item-last ': item.id === records.length}"
        >
          <div class='item-dose'>
            {{item.name}}
          </div>
          <img
            class='item-img'
            src='../../assets/img/多箭头.png'
          />
          <div class='item-dose'>
            {{item.dose}}克
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['recordsTime', 'records']
}
</script>

<style scoped>
li {
  list-style:none;
}
.purchase-warpper {
  margin: 3rem auto;
  width: 90%;
  border: 1px solid #4CAF50;
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
  font-size: 2.2rem;
  font-weight: bold;
  font-family: '汉仪';
  margin-bottom: .8rem;
}
.purchase-title-time{
  font-size: 1.4rem;
  font-family: '汉仪';
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
.item-img {
  margin: auto 0;
  width: 1.2rem;
  height: 1.2rem;
}
.item-dose {
  font-family: '汉宋';
  font-weight: bold;
  font-size: 1.6rem;
}
@font-face {
  font-family: '汉仪';
  src: url('../../assets/font/hanyi.ttf');
}
@font-face {
  font-family: '汉宋';
  src: url('../../assets/font/汉宋.otf');
}
</style>
