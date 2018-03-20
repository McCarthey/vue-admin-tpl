<template>
<!-- 管理员列表,也可以不用,即可对User.vue组件改造,传不同的参数,视实际情况而定 -->
  <div>
    <h3>管理员列表</h3>
    <el-table
      ref="userTable"
      :data="adminList"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-loading="loading">
      <el-table-column
        type="selection"
        width="60">
      </el-table-column>
      <el-table-column
        label="ID"
        prop="id"
        width="120">
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
        label="角色"
        prop="role"
        width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini" type="text"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()" plain>取消选择</el-button>
      <el-button type="danger" @click="deleteSelection()" plain>删除</el-button>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name:'user',
  data(){
    return {
      adminList:[],
      multipleSelection:'',
      loading:true,
    }
  },
  created(){
    this.getAdmins();
  },
  methods:{
    getAdmins(){
      //获取管理员列表
      this.$ajax({
        url:'/api/adminList',
        method:'get',
      })
      .then(res=>{
        console.log(res); 
        let { code,msg,list } = res.data;
        this.adminList = list;
        this.loading = false;
      })
    },
    handleEdit(index, row) {
      //编辑
      console.log(index, row);
      this.$router.push({name:'AdminEdit',params:{id:row.id,mode:'edit'}})
    },
    handleSelectionChange(val) {
      //勾选
      this.multipleSelection = val;
    },
    toggleSelection(rows){
      //切换选择
      if (rows) {
        rows.forEach(row => {
          this.$refs.userTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.userTable.clearSelection();
      }
    },
    deleteSelection(list){
      //删除所选数组
      
    }
  }
}
</script>


