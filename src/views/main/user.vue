<template>
<!-- 用户列表 -->
  <div>
    <h3>用户列表</h3>
    <el-table
      ref="userTable"
      :data="userList"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="60">
      </el-table-column>
      <el-table-column 
        label="日期"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px;">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        prop="name"
        width="180">
      </el-table-column>
      <el-table-column
        label="地址"
        prop="address"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        label="链接"
        prop="webUrl"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name:'user',
  data(){
    return {
      userList:[],
      multipleSelection:''
    }
  },
  created(){
    this.getUsers();
  },
  methods:{
    getUsers(){
      //获取用户列表
      this.$ajax({
        url:'/api/userList',
        method:'get',
      })
      .then(res=>{
        console.log(res); 
        let { code,msg,list } = res.data;
        this.userList = list;
        // let {code,msg,token} = res.data;
        // if (code === 200) {
        //   this.$message({type:'success',message:'登录成功'})
        //   setToken(token)
        //   this.$router.push({name:'Index'})
        // }
      })
    },
    handleSelectionChange(val) {
      //勾选
      this.multipleSelection = val;
    },
    deleteUsers(list){
      //删除所选数组

    }
  }
}
</script>


