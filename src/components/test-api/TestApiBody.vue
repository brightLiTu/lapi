<template>
  <div class="bd">
    <SendAjax :class="{'params-list-hide':!params}" @on-change="urlInputChange" :data="send_ajax" @on-params-click="paramsClick" @on-send="ajax_send" />
    <ParamInput v-if="params" :data='param_list' @on-change="paramsChange" class="param-input-list" />
    <Tabs :animated="false">
      <TabPane label="Body" name="Body">
        <div>
          <RadioGroup v-model="content_type" style="padding-left:14px;">
            <Radio v-for="item in content_type_list" :key="item" :label="item" style="margin-right:18px;">{{item}}</Radio>
          </RadioGroup>
          <ParamInput checkbox :formdata="formdata" :data='body_list' class="param-input-list" />
        </div>
      </TabPane>
      <TabPane label="Headers" name="Headers">
        <div>
          <ParamInput checkbox :data='headers_list' class="param-input-list" />
        </div>
      </TabPane>
      <TabPane label="Tests"></TabPane>
    </Tabs>
  </div>
</template>
<script>
import SendAjax from './SendAjax';
import ParamInput from './ParamInput';
import { headersMap, headers } from './util.js'
import { proxySend, paramsToArray, serializedParams } from '@/util/proxy-send.js'

let initContentType = 'x-www-form-urlencoded';
const arrToObj = function arrToObj(arr) {
  let obj = {};
  for (let i = 0; i < arr.length - 1; i++) {
    obj[arr[i].key] = arr[i].value;
  }
  return obj;
}
export default {
  components: {
    SendAjax,
    ParamInput,
  },
  data() {
    return {
      header: false,//header 显示隐藏
      body: true,//body 显示隐藏
      params: false,//params 显示隐藏
      formdata: false,//content-type 是否为form-data
      content_type: initContentType,
      content_type_list: headers,
      tabs: [
        { label: "模拟" },
        { label: "文档" },
        { label: "测试" },
        { label: "Mock" },
      ],
      send_ajax: {
        url: 'http://localhost:8801',
        method: 'POST',
      },
      headers_list: [
        {
          check: true,
          key: 'content-type',
          value: headersMap[initContentType],
        },
        {
          check: true,
          key: '',
          value: '',
        },
      ],
      param_list: [
        {
          key: '',
          value: '',
        },
      ],
      body_list: [
        {
          check: true,
          key: '',
          value: '',
          formDataType: 'text'
        },
      ]
    }
  },
  watch: {
    content_type(val) {
      this.formdata = false;
      if (val == 'raw') {
        console.log('raw')
      } else {
        if (val == 'form-data') {
          this.formdata = true;
        }
        let isContentType = true;
        this.headers_list.forEach(v => {
          if (v.key == 'content-type') {
            v.value = headersMap[val];
            isContentType = false;
          }
        })
        if (isContentType) {
          this.headers_list.unshift({
            check: true,
            key: 'content-type',
            value: headersMap[val],
          })
        }
      }
    }
  },
  methods: {
    ajax_send() {
      let option = {
        url: this.send_ajax.url,
        method: this.send_ajax.method,
        data: arrToObj(this.body_list),
        headers: arrToObj(this.headers_list)
      }
      console.log(option);
      proxySend(option).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err)
      });
    },
    asyncParams(val) {
      if (!this.params) {
        return
      }
      this.param_list = paramsToArray(val);
      this.param_list.push({
        key: '',
        value: ''
      })
    },
    urlInputChange() {
      this.asyncParams(this.send_ajax.url);
    },
    paramsChange() {
      let url = this.send_ajax.url;
      let index = url.indexOf('?');
      let before = ''
      if (index !== -1) {
        before = url.substring(0, index + 1)
      } else {
        before = url + '?';
      }
      this.send_ajax.url = before + serializedParams(this.param_list, false);
    },
    paramsClick() {
      this.params = !this.params;
      this.asyncParams(this.send_ajax.url);
    },
  },
}
</script>
<style>
.sortable-ghost {
  border-bottom: 1px solid #2d8cf0;
}
.param-input-list {
  padding-left: 20px;
}
.ivu-select-dropdown {
  max-height: 300px;
}
.api-title-input input {
  border-color: transparent;
}
.params-list-hide .send-ajax-params-btn {
  background-color: #fff;
  border-color: #fff;
}
</style>
