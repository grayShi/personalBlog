<template>
  <div style="height: 100%;width:100%">
    <div class="box-card">
      <login-background></login-background>
      <el-card v-if="showCard">
        <el-form label-width="100px" :rules="rules" ref="loginForm" :model="loginForm" class="login-table">
          <el-form-item label="账号" prop="name">
            <el-input type="text" auto-complete="off" v-model="loginForm.name" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" auto-complete="off" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <!-- 点击进行登录提交 -->
            <el-button type="primary" @click="handleSubmit">登录</el-button>
            <!-- 点击重置表单 -->
            <el-button @click="handleReset">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <div class="icon-button">
      <el-tooltip effect="dark" content="移除登录框" placement="top" v-if="showCard">
        <el-button circle icon="el-icon-arrow-right" @click="showCard = !showCard"></el-button>
      </el-tooltip>
      <el-tooltip effect="dark" content="显示登录框" placement="top" v-else>
        <el-button circle icon="el-icon-arrow-left" @click="showCard = !showCard"></el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import loginBackground from '../components/login-background';
  import axios from 'axios';

  const logIn = (form) => axios.post('/api/user/login', form);
  export default {
    name: 'index',
    components: {
      loginBackground
    },
    data () {
      return {
        showCard: true,
        loginForm: {
          name: '',
          password: ''
        },
        rules: {
          name: [
            this.required('name')
          ],
          password: [
            this.required('password')
          ]
        }
      };
    },
    methods: {
      handleSubmit () {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            logIn({form: this.loginForm}).then(data => {
              if (data.data.success && data.data.data) {
                this.$router.push({path: '/index'});
              }
            });
          }
        });
      },
      handleReset () {
        this.resetForm('loginForm');
      }
    }
  };
</script>
