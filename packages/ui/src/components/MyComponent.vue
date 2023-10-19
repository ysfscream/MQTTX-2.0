<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton } from 'element-plus'

const a = ref(100)

const handleClick = () => {
  alert('Button from @mqttx/ui clicked!' + a.value)
}
</script>

<template>
  <div>
    <el-input v-model="a" class="text-2xl text-green-primary" src="https://mqttx.app" />
    <el-button size="large" type="primary" @click="handleClick">Click MQTTX!</el-button>
  </div>
</template>
