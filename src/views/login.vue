<template>
<!-- 登录页 -->
  <div class="bg">
    <div class="login-wrapper">
      <h3>管理系统登录</h3>
      <div class="input-wrapper">
        <el-input
          placeholder="登录名"
          v-model="loginname">
        </el-input>
      </div>
      <div class="input-wrapper">
        <el-input
          placeholder="密码"
          type="password"
          v-model="password">
        </el-input>
      </div>
      <div class="input-wrapper">
        <el-button type="primary" :loading="loading" @click="login">{{btnText}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
//mockjs登录接口
import { API_LOGIN } from '@/mock/api.js'
//设置token
import { setToken } from '@/utils/token.js'

export default {
  name:'login',
  data(){
    return {
      loginname:'',
      password:'',
      loading:false,
      btnText:'登录'
    }
  },
  methods:{
    login(){
      this.loading = true;
      this.btnText = '登录中';
      this.$ajax({
        url:'/api/login',
        method:'post',
        data:{
          loginname:this.loginname,
          password:this.password
        }
      })
      .then(res=>{
        console.log(res); 
        let {code,msg,token} = res.data;
        if (code === 200) {
          this.$message({type:'success',message:'登录成功'})
          setToken(token)
          this.$router.push({name:'Index'})
        }
      })
    }
  }
}
</script>

<style lang="scss">
.bg {
  width: 100%;
  height: 100%;
  background-color: cornflowerblue;
  position: relative;
  .login-wrapper {
    position: absolute;
    top: 20vh;
    right: 20vw;
    background-color: #fff;
    width: 400px;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0px 2px 12px #666;
    .input-wrapper {
      margin:20px 0;
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
