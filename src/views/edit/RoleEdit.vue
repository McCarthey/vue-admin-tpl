<template>
  <div>
    <!-- 角色创建/编辑组件 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/RoleList' }">角色列表</el-breadcrumb-item>
      <el-breadcrumb-item>角色编辑</el-breadcrumb-item>
    </el-breadcrumb>
    <h3>角色编辑</h3>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="角色名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="权限">
        <el-tree
          :data="authTree"
          show-checkbox
          default-expand-all
          node-key="id"
          ref="tree"
          highlight-current
          :props="defaultProps">
        </el-tree>
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
  name:'roleEdit',
  data(){
    return {
      mode:'',
      ruleForm:{
        name:'',
      },
      rules:{
        name:[
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 0, max: 10, message: '名称不得长于10个字符', trigger: 'blur,change' }
        ]
      },
      authTree: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps:{
        children: 'children',
        label: 'label'
      }
    }
  },
  created(){

  },
  mounted(){
    //判断是编辑还是新建
    this.mode = this.$route.params.mode;
    console.log(this.mode);
    //设置树节点
    this.setCheckedKeys([2,5,7,8])
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
      //重置tree
      this.resetChecked();
    },
    //通过key获取树节点
    getCheckedKeys() {
      return this.$refs.tree.getCheckedKeys();
    },
    //通过key设置树节点（编辑时使用）
    setCheckedKeys(nodeList) {
      this.$refs.tree.setCheckedKeys(nodeList); 
    },
    //重置key
    resetChecked() {
      this.$refs.tree.setCheckedKeys([]);
    }

  }
}
</script>
