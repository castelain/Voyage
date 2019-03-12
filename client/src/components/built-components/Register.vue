<template>
  <my-row class="bg">
    <el-form :model="form" ref="form" :rules="rules" slot="content">
      <router-link to="/">
        <img src="../../assets/images/login/login-logo.png" alt="logo">
      </router-link>
      <p class="title">注册VOYAGE，以远方为名起航</p>
      <el-row :gutter="20">
        <el-col :span="14" :xs="24">
          <el-form-item prop="phone">
            <el-input v-model="form.phone" placeholder="手机号"></el-input>
          </el-form-item>
          <el-row :gutter="20">
            <el-col :span="14">
                <el-form-item prop="code">
                    <el-input v-model="form.code" placeholder="6位短信验证码"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="10">
                <el-button plain type="success" @click="sendCode" style="width: 120%;">获取验证码</el-button>
            </el-col>
          </el-row>
            <el-form-item prop="password">
                <el-input v-model="form.password" placeholder="设置密码" show-password></el-input>
            </el-form-item>
            <el-form-item prop="password2">
                <el-input v-model="form.password2" placeholder="确认密码" show-password></el-input>
            </el-form-item>
          <el-checkbox
            v-model="form.isAgree"
            label="我已阅读并同意《服务协议》"
            class="left"
            style="color: white;"
          ></el-checkbox>
          <el-form-item>
            <el-button type="success" @click="register(form)" id="register">注&nbsp;册</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="10" class="hidden-md-and-down" style="margin-top: 8%;">
          <p>扫码下载App</p>
          <img :src="appCode" alt="app二维码" style="margin: 25px auto;">
          <p>已有账号？
            <router-link to="/login" style="color: green;">登录</router-link>
          </p>
        </el-col>
      </el-row>
    </el-form>
  </my-row>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        phone: null,
        code: null,
        password: null,
        password2: null,
        isAgree: false,
      },
      // 表单验证规则

      rules: {
        phone: [
          { required: true, message: "请输入号码", trigger: "blur" },
        { pattern: /^1[34578]\d{9}$/, message: "请输入正确的电话号码", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入短信验证码", trigger: "blur" },
          {
            pattern: /\w{6}/,
            message: "验证码为6位字母或数字",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "密码不可为空", trigger: "blur" }
        ],
        password2: [
          { required: true, message: "确认密码不可为空", trigger: "blur" }
        ]
      },
      appCode: require("../../assets/images/register/erweima.jpg")
    };
  },
  methods: {
    register: function(form) {
        // console.log(this.form.isAgree);
        if(!this.form.isAgree){
            this.$message({
                type: 'warning',
                message: '注册需同意《服务协议》'
            });
        }else{
            this.$refs['form'].validate((valid) => {
                if(valid) {
                    if(this.form.password === this.form.password2){
                        this.$router.push('/login');
                    }else{
                        this.$message({
                            type: 'error',
                            message: '表单提交失败：前后两次输入的密码不一致'
                        });
                    }
                }else{
                    this.$message({
                        type: 'error',
                        message: '表单提交失败：注册数据中尚存在错误'
                    })
                }
            });
        }
    },
    sendCode: function() {
      this.$message("短信验证码已发送，请注意查收！");
    }
  }
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
#register {
  width: 100%;
  margin: 20px auto;
}
.title {
  font-size: 20px;
  color: white;
  margin: 30px auto;
}
</style>
