<template>
  <div>
    <el-container label-width="120px">
      <el-header>Register</el-header>
      <el-form>
        <el-form-item label="Email :">
          <el-input v-model="email" />
        </el-form-item>
        <el-form-item label="Password :">
          <el-input v-model="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">Register</el-button>
        </el-form-item>
      </el-form>
    </el-container>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
const email = ref('')
const password = ref('123')

watch(email, (value) => {
  console.log(value)
})

</script>
<style scoped></style>
