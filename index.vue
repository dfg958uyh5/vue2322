<template>
  <el-form :model="loginForm" ref="loginForm" class="login-container" :rules="rules">
    <h3>饿了么后台管理系统</h3>
    <el-form-item prop="adminName">
      <el-input ref="adminName" type="text" v-model="loginForm.adminName" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item prop="passWord">
      <el-input type="password" v-model="loginForm.passWord" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button :loading="isLoading" type="primary" @click="submitForm('loginForm')">登陆</el-button>
      <el-button :loading="isLoading" type="primary" @click="submi('loginForm')">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// import axios from "axios";
export default {
  name: "login",
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value.length < 4 || value.length > 10) {
        callback(new Error("请输入4到10位的密码"));
      } else {
        callback();
      }
      // if (value === '') {
      //     callback(new Error('请再次输入密码'));
      // } else if (value !== this.ruleForm2.pass) {
      //     callback(new Error('两次输入密码不一致!'));
      // } else {
      //     callback();
      // }
    };
    return {
      isLoading: false,
      rules: {
        adminName: [
          { required: true, message: "请输入管理员账号", trigger: "blur" }
        ],
        passWord: [
          { required: true, message: "请输入您的密码", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
          // { min:4,max:10, message: '密码长度为4---10位', trigger: 'blur' }
        ]
      },
      loginForm: {
        adminName: "",
        passWord: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.isLoading = true;
          this.$router.push({ path: "/data" });
          console.log(this.loginForm.adminName + "/" + this.loginForm.passWord);
          this.isLoading = false;
        }
      });
    },
    submi() {
      this.$router.push({ path: "/data1" });
    },
    dataList() {
      this.axios
        .post(
          "/api/test",
          { name: "xiaoming", sex: "nan" },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(function(res) {
          this.ruleForm = res.data.data;
          console.log(res.data);
          //控制台打印请求成功时返回的数据
        })
        .catch(function(err) {
          if (err.response) {
            console.log(err.response);
            //控制台打印错误返回的内容
          }
        });
    },
    resetForm() {}
  }
};
</script>

<style scoped>
.login-container {
  width: 350px;
  margin: 150px auto;
  border: 2px solid #eaeaea;
  padding: 35px 35px 15px 25px;
  box-shadow: 0 0 10px blue;
}
.login-container h3 {
  text-align: center;
}
</style>
