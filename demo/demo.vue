<template>
  <div>
    <MyTab :tabIndex="index" :tabList="tabList" @changeTab="changeTab"></MyTab>
  </div>
</template>

<script>
import MyTab from 'vue-tabs-plugin'
import 'vue-tabs-plugin/index.css'
export default {
  components: {
    MyTab,
  },
  data () {
    return {
      index: 1,//当前激活的tab
      tabList: [{ //tab列表
          name: '委案金额',
          index: 1
        }, {
          name: '回收金额',
          index: 2
        },],
    }
  },
  methods: {
    changeTab(item){
       this.index = item.index;
    },
  },
}
</script>