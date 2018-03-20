<template>
  <div> 
    <!-- 管理员创建/编辑组件 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/AdminList' }">管理员列表</el-breadcrumb-item>
      <el-breadcrumb-item>管理员编辑</el-breadcrumb-item>
    </el-breadcrumb>
    <h3>管理员编辑</h3>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="role">
        <el-select v-model="ruleForm.role" placeholder="请选择">
          <el-option
            v-for="item in roleList"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
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
  name:'adminEdit',
  data(){
    return {
      mode:'',
      ruleForm:{
        name:'',
        addr:'',
      },
      rules:{
        name:[
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 0, max: 10, message: '名称不得长于10个字符', trigger: 'blur,change' }
        ]
      },
      roleList: [],
    }
  },
  created(){
    this.getRoleList().then(res=>{
      console.log(res);
      let { code,msg,list } = res.data;
      this.roleList = list;
    })
  },
  mounted(){
    //判断是编辑还是新建
    this.mode = this.$route.params.mode;
    console.log(this.mode);
  },
  methods: {
    getRoleList() {
      return this.$ajax({
        url: '/api/roleList',
        method: 'get'
      })
    },
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
    },
  }
}
</script>

