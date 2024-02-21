<template>
  <div>
    <el-alert :title="err" type="error" v-if="err" show-icon />
    <el-container >
      <el-header height="60px" class="header">Registration</el-header>
      <el-main class="main">
        <el-form label-width="120px" label-position="left">
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
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue' // Added onMounted import
import AuthenticationService from '@/services/AuthenticationService'
const email = ref('')
const password = ref('')
const err = ref(null)

// watch(email, (value) => {
//   console.log(value)
// })

const register = async () => {
  try {
    const response = await AuthenticationService.register({
    email: email.value,
    password: password.value
  })
  console.log(response.data)
  } catch (error) {
    err.value = error.response.data.error;
  }
}
</script>

<style scoped>

.header{
  display: flex;
  justify-content: center;
  align-items: center; 
  font-size: 30px;
}

</style>
