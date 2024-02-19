<template>
  <div>
    <el-container label-width="120px">
      <el-header>Register</el-header>
      <el-form>
        <el-form-item label="Email :">
          <el-input v-model="email" placeholder="Please provide Email" type="email" />
        </el-form-item>
        <el-form-item label="Password :">
          <el-input v-model="password" placeholder="Please input password" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">Register</el-button>
        </el-form-item>
      </el-form>
    </el-container>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue' // Added onMounted import
import AuthenticationService from '@/services/AuthenticationService'
const email = ref('')
const password = ref('')

// watch(email, (value) => {
//   console.log(value)
// })

const register = async () => {
  const response = await AuthenticationService.register({
    email: email.value,
    password: password.value
  })
  console.log(response.data)
}
</script>

<style scoped></style>
