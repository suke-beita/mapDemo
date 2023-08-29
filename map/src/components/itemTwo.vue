<template>
  <div>
    <h2>产品月销</h2>
    <div class="chart"
         id="twoChart1">
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
    let $echarts = inject("echarts")
    let $http = inject("axios")
    let data = reactive({})
    async function getState () {
      data = await $http({ url: "/two/data" })
    }

    onMounted(() => {
      getState().then(() => {
        console.log("折线图", data)
        let twoChart = $echarts.init(document.getElementById('twoChart1'))
        twoChart.setOption({
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#e6b600"
              }
            }
          },
          legend: {
            data: ["服饰", "数码", "家电", "家居", "日化"]
          },
          grid: {
            left: "1%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: {
            type: "category",
            data: data.data.chartData.chartData.day,
            boundaryGap: false,
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
          series: [
            {
              name: "服饰",
              type: "line",
              data: data.data.chartData.chartData.num.Chemicals,
              smooth: true,
              showSymbol: false,
              stack: "Total",
              LineStyle: {
                width: 0
              },
              emphasis: {
                focus: "series"
              },
              areaStyle: {
                opacity: .8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgb(128,255,165)"
                },
                {
                  offset: 1,
                  color: "rgb(1,191,236)"
                }
                ])
              }
            },
            {
              name: "数码",
              type: "line",
              data: data.data.chartData.chartData.num.Clothes,
              smooth: true,
              showSymbol: false,
              stack: "Total",
              LineStyle: {
                width: 0
              },
              emphasis: {
                focus: "series"
              },
              areaStyle: {
                opacity: .8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgb(0,221,255)"
                },
                {
                  offset: 1,
                  color: "rgb(77,119,255)"
                }
                ])
              }
            },
            {
              name: "家电",
              type: "line",
              data: data.data.chartData.chartData.num.Electrical,
              smooth: true,
              showSymbol: false,
              stack: "Total",
              LineStyle: {
                width: 0
              },
              emphasis: {
                focus: "series"
              },
              areaStyle: {
                opacity: .8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgb(55,162,255)"
                },
                {
                  offset: 1,
                  color: "rgb(116,21,219)"
                }
                ])
              }
            },
            {
              name: "家居",
              type: "line",
              data: data.data.chartData.chartData.num.digit,
              smooth: true,
              showSymbol: false,
              stack: "Total",
              LineStyle: {
                width: 0
              },
              emphasis: {
                focus: "series"
              },
              areaStyle: {
                opacity: .8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgb(225,0,135)"
                },
                {
                  offset: 1,
                  color: "rgb(135,0,157)"
                }
                ])
              }
            },
            {
              name: "日化",
              type: "line",
              data: data.data.chartData.chartData.num.gear,
              smooth: true,
              showSymbol: false,
              stack: "Total",
              LineStyle: {
                width: 0
              },
              emphasis: {
                focus: "series"
              },
              areaStyle: {
                opacity: .8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgb(255,191,0)"
                },
                {
                  offset: 1,
                  color: "rgb(224,62,76)"
                }
                ])
              }
            }
          ]
        })
      })
    })
    return {
      getState, data
    }
  }
}
  </script>