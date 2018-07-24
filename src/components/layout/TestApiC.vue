<template>
  <div class="wrapper-content">
    <Tabs :animated="false" closable type="card" @on-tab-remove="handleTabRemove">
      <TabPane v-for="(item,index) in tabs" v-if="item.show" :name="index+'-l'" :label="item.label" :key="index">
        <LBody/>
      </TabPane>
      <Button type="ghost" @click="handleTabsAdd" size="small" slot="extra">
        <Icon type="android-add"></Icon>
        新增
      </Button>
    </Tabs>
  </div>
</template>
<script>
import LBody from './../apiTest/TestApiBody'

export default {
  components: {
    LBody
  },
  data() {
    return {
      tabs: [
        { label: "标签0", show: true },],
    }
  },
  methods: {
    handleTabsAdd() {
      var index = this.tabs.length;
      this.tabs.push({ label: "标签" + index, show: true })
    },
    handleTabRemove(name) {
      var index = name.split('-')[0];
      this.tabs[index].show = false;
    }
  }
}
</script>
<style>
.wrapper-content {
  padding: 14px 16px;
  position: relative;
}
</style>
