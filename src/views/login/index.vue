<template>
  <div class="container">
    <div class="login-container">
      <el-form class="login-form" ref="formRef" :model="form" :rules="rules">
        <div class="title-container">
          <h3 class="title">用户登录</h3>
        </div>
        <el-form-item prop="username" class="form-item">
          <SvgIcon class="svg-container" name="user"></SvgIcon>
          <el-input v-model="form.username" placeholder="用户名" />
        </el-form-item>
        <el-form-item prop="password" class="form-item">
          <SvgIcon class="svg-container" name="password"></SvgIcon>
          <el-input
            v-model="form.password"
            type="password"
            show-password
            placeholder="密码"
            @keyup.enter="handleLogin"
          />
        </el-form-item>
        <el-button
          class="login-button"
          type="primary"
          :loading="loading"
          @click="handleLogin(formRef)"
        >
          登录
        </el-button>
      </el-form>
      <div class="right">
        <img src="@/assets/images/login.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, ElNotification } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
import getTimeState from '@/utils/time'

const form = reactive({
  username: 'admin',
  password: '123456'
})
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 6, message: '长度2~6个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入登录密码', trigger: 'blur' },
    { min: 6, max: 10, message: '长度6~10个字符', trigger: 'blur' }
  ]
})

const formRef = ref<FormInstance>()
const loading = ref(false)
const router = useRouter()
const userStore = useUserStore()
const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      loading.value = true
      try {
        await userStore.login(form)
        router.push('/')
        // ElMessage.success('登录成功')
        ElNotification({
          title: getTimeState(),
          message: '欢迎登录 Muxue-Admin',
          type: 'success',
          duration: 3000
        })
      } catch (error) {
        ElMessage.error((error as Error).message)
      } finally {
        loading.value = false
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style lang="scss" scoped>
$bg: #cbd5e1;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.container {
  padding: 30px;
  // width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $bg;

  .login-container {
    display: flex;
    width: 720px;
    height: 332px;
    background-color: white;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    .login-form {
      box-sizing: border-box;
      width: 50%;
      padding: 30px;

      .title-container {
        .title {
          font-size: 26px;
          margin: 0px auto 40px auto;
          text-align: center;
          font-weight: bold;
        }
      }
      .form-item {
        position: relative;
        .svg-container {
          position: absolute;
          top: 3px;
          left: 6px;
          z-index: 999;
        }
      }

      :deep(.el-input__inner) {
        padding-left: 20px;
      }

      .login-button {
        width: 100%;
      }
    }
    .right {
      position: relative;
      width: 50%;
      img {
        position: absolute;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>

<style>
@media (max-width: 768px) {
  .login-form {
    width: 100% !important;
  }
  .right {
    display: none;
  }
}
</style>
