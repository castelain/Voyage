<template>
  <my-row class="bg">
    <el-form :model="form" ref="form" :rules="rules" slot="content">
      <router-link to="/">
        <img src="../../assets/images/login/login-logo.png" alt="logo">
      </router-link>
      <p class="title">登录VOYAGE，追寻梦和远方</p>
      <el-row :gutter="20">
        <el-col :span="14" :xs="24">
          <el-form-item prop="phone">
            <el-input v-model="form.phone" placeholder="手机号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
              <el-input v-model="form.password" placeholder="设置密码" show-password></el-input>
          </el-form-item>

          <el-checkbox
            v-model="form.rememberPassword"
            label="记住密码"
            class="left"
            style="color: white"
          ></el-checkbox>
          <a href="#" style="color: white; font-size: 14px;" class="right">忘记密码</a>
          <el-form-item>
            <el-button type="success" @click="login(form)" id="login">登&nbsp;录</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="10" class="hidden-md-and-down" id="otherWays">
          <img v-for="(way, index) in otherWays" :key="index" :src="way.src" :alt="way.msg" title="暂不支持这种登录方式">
          <p>没有账号？
            <router-link to="/register" style="color: green;">注册</router-link>
          </p>
        </el-col>
      </el-row>
    </el-form>
  </my-row>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        phone: null,
        password: null,
        rememberPassword: null
      },
      // 表单验证规则
      rules: {
        phone: [
          { required: true, message: "请输入号码", trigger: "blur" },
        { pattern: /^1[34578]\d{9}$/, message: "请输入正确的电话号码", trigger: "blur" }
        ], 
        password: [
          { required: true, message: "密码不可为空", trigger: "blur" }
        ],
      },
      otherWays: [
        {
          src: require('../../assets/images/login/weibo.png'),
          msg: '微博登录'
        },
        {
          src: require('../../assets/images/login/QQ.png'),
          msg: 'QQ登录'
        },
        {
          src: require('../../assets/images/login/weixin.png'),
          msg: '微信登录'
        }
      ]
    };
  },
  methods: {
    login: function(form) {
        this.$refs['form'].validate((valid) => {
          if(valid) {
            if(this.form.rememberPassword){
              localStorage.setItem('password', this.form.password);
            }
            localStorage.setItem('phone', this.form.phone);
            localStorage.setItem('isLogined', true);
            this.$router.push('/');
          }else{
            this.$message({
              type: 'error',
              message: '提交表单失败：表单填写尚存在错误'
            })
          }
        })
    },
  },
  mounted() {
    let phone = localStorage.getItem('phone')
    let password = localStorage.getItem('password');
    if(phone && password){
      this.form.phone = phone;
      this.form.password = password;
    }
  },
};
</script>

<style scoped>
.bg {
  background-image: url("../../assets/images/register/register-background.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  margin-top: -60px;
}
.el-form {
  width: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 30px;
  margin: 5% auto;
}
/* .el-input {
  margin-bottom: 20px;
} */
.inline {
  display: inline-block;
}
#login {
  width: 100%;
  margin: 20px auto;
}
.title {
  font-size: 20px;
  color: white;
  margin: 30px auto;
}
#otherWays > img {
  margin-bottom: 18px; border-radius: 6px;
}
</style>
