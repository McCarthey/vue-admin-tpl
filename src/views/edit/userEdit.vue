<template>
  <div> 
    <!-- 用户创建/编辑组件 -->
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
      <el-form-item label="地址" prop="addr">
        <el-input v-model="ruleForm.addr"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name:'userEdit',
  data(){
    return {
      mode:'',
      ruleForm:{
        name:'',
        addr:'',
      },
      rules:{
        name:[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 0, max: 10, message: '用户名不得长于10个字符', trigger: 'blur,change' }
        ],
        addr:[
          { required: true, message: '请输入地址', trigger: 'blur' },
        ]
      }
    }
  },
  created(){
    //判断是编辑还是新建
    this.mode = this.$route.params.mode;
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //创建/编辑接口


        } else {
          //可以添加错误提示
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

