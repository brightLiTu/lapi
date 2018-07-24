<template>
  <div>
    <div class="param-box">
      <Checkbox v-model="data.check" class="check-box"></Checkbox>
      <AutoComplete v-model="data.input1.value" :data="data.input1.data" :transfer="true" :filter-method="filterMethod" placeholder="key" clearable style="width:200px;margin-right:8px;"></AutoComplete>
      <AutoComplete v-model="data.input2.value" :data="data.input2.data" :transfer="true" :filter-method="filterMethod" placeholder="value" clearable style="width:400px;margin-right:8px;"></AutoComplete>
      <Icon type="navicon-round" class="drap-icon"></Icon>
      <Icon type="close" class="close-icon"></Icon>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => { }
    },
  },
  data() {
    return {
    }
  },
  methods: {
    filterMethod(value, option) {
      return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
    },
  },
}
</script>
<style>
.param-box {
  padding: 8px;
}
.param-box .ivu-input {
  border-right: none;
  border-left: none;
  border-top: none;
  box-shadow: none;
  border-radius: 0;
}
.param-box .check-box {
  vertical-align: middle;
}
.drap-icon {
  font-size: 16px;
  cursor: s-resize;
  vertical-align: middle;
}
.close-icon {
  font-size: 16px;
  cursor: pointer;
  vertical-align: middle;
}
.close-icon:hover,
.drap-icon:hover {
  color: #2d8cf0;
}
.param-box .drap-icon,
.param-box .close-icon {
  margin-right: 8px;
}
</style>
