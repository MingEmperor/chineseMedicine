<template>
  <div>
    <toolbar :title='title'></toolbar>
    <div class='pieChart-warpper'>
    <div class='pieChart' id="myChart" :style="{width: '360px', height:'360px'}"></div>
    </div>
  </div>
</template>

<script>
import toolbar from '../common/toolbar'
export default {
  name: 'hello',
  data () {
    return {
      title: '三旬药分',
      seriesData: [],
      legendData: []
    }
  },
  created () {
    this.$axios.post('/ChineseMedicine/recipe/sanxun.do')
      .then(res => {
        if (res.data) {
          this.seriesData = res.data
          this.seriesData.forEach(el => {
            this.legendData.push(el.name)
          })
          this.drawLine()
        } else {
          console.log(res.data)
        }
      })
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      var option = {
        title: {
          text: '药分前五',
          subtext: '根据上月开具处方中的药材剂量绘制',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['附子', '人参', '当归', '麻黄', '蛇胆']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            // data: [
            //   {value: 89, name: '附子'},
            //   {value: 310, name: '人参'},
            //   {value: 234, name: '当归'},
            //   {value: 135, name: '麻黄'},
            //   {value: 266, name: '蛇胆'}
            // ],
            data: this.seriesData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  },
  components: {
    toolbar
  }
}
</script>

<style scoped>
.pieChart-warpper{
  margin-top:2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
