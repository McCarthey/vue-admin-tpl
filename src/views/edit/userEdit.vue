<template>
  <div> 
    <!-- 用户编辑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/UserList' }">用户列表</el-breadcrumb-item>
      <el-breadcrumb-item>用户编辑</el-breadcrumb-item>
    </el-breadcrumb>
    <h3>用户编辑</h3>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name:'userEdit',
  data(){
    return {
      ruleForm:{
        name:'',
      },
      rules:{
        name:[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 0, max: 10, message: '用户名不得长于10个字符', trigger: 'blur,change' }
        ]
      }
    }
  },
  created(){
    //判断是编辑还是新建
    console.log(this.$route.params.mode)
  }
}
</script>

