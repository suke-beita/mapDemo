<template>
  <div>
    <header>
      <h1>数据可视化——各地销量</h1>
    </header>
    <!-- 大容器 -->
    <section class="container">
      <!--左容器-->
      <section class="itemLeft">
        <itemPage>
          <itemOne />
        </itemPage>
        <itemPage>
          <itemTwo />
        </itemPage>
      </section>
      <!-- 中间容器 -->
      <section class="itemCenter">
        <mapPage />
      </section>
      <!-- 右容器 -->
      <section class="itemRight">
        <itemPage>
          <itemThree />
        </itemPage>
        <itemPage>
          <itemFour />
        </itemPage>
      </section>
    </section>
  </div>
</template>

<script>
import itemPage from "@/components/itemPage.vue"
import itemOne from "@/components/itemOne.vue"
import itemTwo from "@/components/itemTwo.vue"
import itemThree from "@/components/itemThree.vue"
import itemFour from "@/components/itemFour.vue"
import mapPage from "@/components/mapPage.vue"

import { inject } from "vue"
export default {
  components: {
    itemPage, itemOne, itemTwo, itemThree, itemFour, mapPage
  },
  setup () {
    let $echarts = inject("echarts")
    let $http = inject("axios")
    console.log($echarts)
    console.log($http)
  }
}
</script>

<style lang="less">
header {
  height: 1rem;
  width: 100%;
  background-color: rgba(0, 0, 255, 0.2);
  //标题文字样式
  h1 {
    font-size: 0.375rem;
    color: #fff;
    text-align: center;
    text-align: 1rem;
  }
}
.container {
  min-width: 1200px;
  max-width: 2800px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  display: flex;
  //设置左右在页面的份数
  .itemLeft,
  .itemRight {
    flex: 3;
  }
  .itemCenter {
    flex: 6;
    height: 10.5rem;
    border: 1px solid blue;
    padding: 0.125rem;
    margin: 0.25rem;
  }
}
</style>