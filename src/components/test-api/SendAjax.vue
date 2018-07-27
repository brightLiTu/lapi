<template>
  <Row class="send-ajax">
    <Col span="19">
    <Input v-model="data.url" size="large" @on-change="input_change">
    <Select transfer v-model="data.method" slot="prepend" style="width: 100px;">
      <Option v-for="item in ajax_method_list" :value="item" :key="item">{{ item }}</Option>
    </Select>
    <Button slot="append" class="send-ajax-params-btn" @click="params_click">params</Button>
    </Input>
    </Col>
    <Col span="4">
    <Col span="14" style="text-align:center;">
    <Button type="primary" size="large" @click="send" icon="paper-airplane" style="padding-left: 20px;padding-right: 20px;">发送</Button>
    </Col>
    <Col span="10" style="text-align:center;">
    <Button type="success" size="large" @click="save">保存</Button>
    </Col>
    </Col>
  </Row>
</template>

<script>
import { methods } from './util.js'
export default {
  props: {
    data: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      ajax_method_list: methods,
    }
  },
  computed: {

  },
  methods: {
    send() {
      this.$emit('on-send');
    },
    save() {
      this.$emit('on-save');
    },
    params_click() {
      this.$emit('on-params-click');
    },
    input_change() {
      this.$emit('on-change');
    }
  }
}
</script>
<style>
.send-ajax {
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
