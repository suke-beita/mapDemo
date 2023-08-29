<template>
  <div>
    <h2>周销量</h2>
    <div class="chart"
         id="fourChart1">
      <!-- 图表的容器 -->
    </div>
  </div>
</template>

<style>
.chart {
  height: 4.5rem;
}
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
</style>

<script>
import { inject, onMounted, reactive } from "vue"

export default {
  setup () {
    let $echarts = inject("echarts");
    let $http = inject("axios")
    let data = reactive({});
    async function getState () {
      data = await $http({ url: "/four/data" });
    }
    onMounted(() => {
      getState().then(() => {
        console.log("柱状图", data)

        let fourChart = $echarts.init(document.getElementById('fourChart1'));

        fourChart.setOption({
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: {
            type: "category",
            data: data.data.chartData.chartData.day,
            axisLine: {
              LineStyle: {
                color: "#fff"
              }
            }
          },
          yAxis: {
            type: "value",
            axisLine: {
              LineStyle: {
                color: "#fff"
              }
            }
          },
          legend: {

          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          series: [
            {
              name: "服饰",
              type: "bar",
              data: data.data.chartData.chartData.num.Clothes,
              stack: "total",
              label: {
                show: true
              },
              emphasis: {
                focus: "series"
              }
            },
            {
              name: "数码",
              type: "bar",
              data: data.data.chartData.chartData.num.digit,
              stack: "total",
              label: {
                show: true
              },
              emphasis: {
                focus: "series"
              }
            },
            {
              name: "家电",
              type: "bar",
              data: data.data.chartData.chartData.num.Electrical,
              stack: "total",
              label: {
                show: true
              },
              emphasis: {
                focus: "series"
              }
            },
            {
              name: "家居",
              type: "bar",
              data: data.data.chartData.chartData.num.gear,
              stack: "total",
              label: {
                show: true
              },
              emphasis: {
                focus: "series"
              }
            },
            {
              name: "日化",
              type: "bar",
              data: data.data.chartData.chartData.num.Chemicals,
              stack: "total",
              label: {
                show: true
              },
              emphasis: {
                focus: "series"
              }
            }
          ]
        })
      })
    });
    return {
      getState, data
    }
  }
}
</script>