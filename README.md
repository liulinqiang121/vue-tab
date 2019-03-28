# vue-tab
写的类似element-ui tab的一个插件
写的类似element tab的一个插件,是在公司项目的共用组件，现在写成一个插件发布到了npm,地址：https://www.npmjs.com/package/vue-tabs-plugin，
写了一个demo,
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
效果：


      
![demo.png](https://upload-images.jianshu.io/upload_images/13382831-9209445c8125fd20.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

      

