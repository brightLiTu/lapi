<template>
  <draggable v-model="paramData" @end="drapEnd" :options="{group:'params',handle:'.drap-icon',animation:100}">
    <div v-for="(item,index) in paramData" class="param-box" :key="index">
      <Checkbox v-if="checkbox&&index!=lastIndex" v-model="item.check" @on-change="onCheckboxChange(index)" class="check-box"></Checkbox>
      <span v-else class="empty-Checkbox"></span>
      <Input v-model="item.key" clearable style="width: 36%;margin-right:8px;" @on-change="onChange(index)" @on-focus="focusMethod(index)" placeholder="key"></Input>
      <Input v-model="item.value" clearable style="width: 46%;margin-right:8px;" @on-change="onChange(index)" @on-focus="focusMethod(index)" placeholder="value"></Input>
      <template v-if="formdata&&index!=lastIndex">
        <Select transfer v-model="item.formDataType" size="small" class="formdata-select" style="width:56px">
          <Option value="text">text</Option>
          <Option value="file">file</Option>
        </Select>
      </template>
      <template v-if="index!=lastIndex">
        <Icon type="navicon-round" class="drap-icon"></Icon>
        <Icon type="close" class="close-icon" @click="close"></Icon>
      </template>
    </div>
  </draggable>
</template>
<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    formdata: {
      type: Boolean,
      default: false
    },
    checkbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      paramData: [],
      formDataType: 'text'
    }
  },
  created() {
    this.paramData = this.data;
  },
  computed: {
    lastIndex() {
      return this.paramData.length - 1;
    }
  },
  watch: {
    data(val) {
      this.paramData = val;
    }
  },
  methods: {
    focusMethod(index) {
      if (index == this.lastIndex) {
        this.dataPush();
      }
    },
    dataPush() {
      this.paramData.push({
        check: true,
        key: '',
        value: '',
        formDataType: 'text'
      })
    },
    close(i) {
      this.paramData.splice(i, 1);
      this.$emit('on-update', i);
    },
    onChange(i) {
      this.$emit('on-change', i);
    },
    onCheckboxChange(i) {
      this.$emit('on-checkbox-change', i);
    },
    drapEnd(evt) {
      if (evt.newIndex == this.lastIndex) {
        this.paramData.splice(this.lastIndex - 1, 1);
        this.dataPush();
      }
      this.$emit('on-update', evt.newIndex);
    }
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
.formdata-select,
.param-box .drap-icon,
.param-box .close-icon {
  margin-right: 8px;
}
.formdata-select .ivu-select-selection {
  border: 0;
}
.empty-Checkbox {
  display: inline-block;
  width: 22px;
}
</style>