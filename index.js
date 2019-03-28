const MyTab = {
  name: 'MyTab',
  props: { tabList: Array, tabIndex: Number },
  data() {
    return {};
  },
  template: 
   `<div class="my-tabs"> 
      <div class="tabs-bar"> 
          <div class="tabs-bar-nav"> 
            <div class="tabs-tab" v-for="tab in tabList" :key="tab.id" :class="[tabIndex == tab.index ? 'tabs-active' : '']" @click="changeTab(tab)"> {{tab.name}} </div> 
          </div>
      </div> 
      <div class="tabs-content">
          <slot></slot> 
      </div> 
  </div>`
  ,
  methods: {
    changeTab(tab) {
      this.$emit('changeTab',tab);
    },
  },
}
if ("Vue" in window) {
  window.Vue.component("MyTab", MyTab);
}

export default MyTab;


