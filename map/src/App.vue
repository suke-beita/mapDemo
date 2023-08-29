<template>
  <router-view />
</template>

<script>
import { provide } from 'vue';
import * as echarts from "echarts"
import axios from "axios"

//设置基准路径
axios.defaults.baseURL = "http://localhost:8888"

export default {
  setup () {
    // Provide("名字随便","传递的内容")
    provide("echarts", echarts)
    provide("axios", axios)

  }
}
</script>

<style lang="less">
body {
  background: url("~@/assets/bg.jpg") top center no-repeat;
  background-size: 100% 100%;
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
