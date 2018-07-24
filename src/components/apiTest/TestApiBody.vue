<template>
  <div class="bd">
    <draggable v-model="paramData" :options="{group:'params',handle:'.drap-icon',}">
      <ParamInput v-for="(item,index) in paramData" :key="index" :data="item" />
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import ParamInput from './ParamInput';

export default {
  components: {
    ParamInput,
    draggable
  },
  data() {
    return {
      paramData: [
        {
          check: true,
          input1: {
            value: "",
            data: ['Steve Jobs', 'Stephen Gary Wozniakvsdf', 'Jonathan Paul Ive'],
          },
          input2: {
            value: "",
            data: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive'],
          }
        },
        {
          check: true,
          input1: {
            value: "",
            data: ['Steve Jobs', 'Stephen Gary Wozniakvsdf', 'Jonathan Paul Ive'],
          },
          input2: {
            value: "",
            data: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive'],
          }
        },
      ],
    }
  },
  methods: {
  },
}
</script>
<style>
</style>
