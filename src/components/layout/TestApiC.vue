<template>
  <div class="wrapper-content">
    <Tabs :animated="false" closable v-model="tabsValue" type="card" @on-tab-remove="handleTabRemove">
      <TabPane v-for="(item,index) in tabs" v-if="item.show" :name="index+'-l'" :label="item.label" :key="index">
        <div>
          <Input v-if="item.label!=''" v-model="item.label" size="large" class="api-title-input"></Input>
          <LBody/>
        </div>
      </TabPane>
      <Button type="ghost" @click="handleTabsAdd" size="small" slot="extra">
        <Icon type="android-add"></Icon>
        新增
      </Button>
    </Tabs>
  </div>
</template>
<script>
import LBody from './../test-api/TestApiBody'

export default {
  components: {
    LBody
  },
  data() {
    return {
      tabs: [
        { label: "请求接口0", show: true },
      ],
      tabsValue: '0-l'
    }
  },
  methods: {
    handleTabsAdd() {
      var index = this.tabs.length;
      this.tabs.push({ label: "请求接口" + index, show: true });
      this.tabsValue = index + '-l';
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
