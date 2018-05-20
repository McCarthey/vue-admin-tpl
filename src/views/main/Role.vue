<template>
<!-- 角色列表 -->
  <div>
    <h3>角色列表</h3>
    <el-table
      ref="roleTable"
      :data="roleList"
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
        label="角色名"
        prop="name"
        width="180">
      </el-table-column>
      <el-table-column
        label="描述"
        prop="desc"
        show-overflow-tooltip>
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
      roleList:[],
      multipleSelection:'',
      loading:true,
    }
  },
  created(){
    this.getAdmins();
  },
  methods:{
    getAdmins(){
      //获取角色列表
      this.$ajax({
        url:'/api/roleList',
        method:'get',
      })
      .then(res=>{
        console.log(res); 
        let { code,msg,list } = res.data;
        this.roleList = list;
        this.loading = false;
      })
    },
    handleEdit(index, row) {
      //编辑
      console.log(index, row);
      this.$router.push({name:'RoleEdit',params:{id:row.id,mode:'edit'}})
    },
    handleSelectionChange(val) {
      //勾选
      this.multipleSelection = val;
    },
    toggleSelection(rows){
      //切换选择
      if (rows) {
        rows.forEach(row => {
          this.$refs.roleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.roleTable.clearSelection();
      }
    },
    deleteSelection(list){
      //删除所选数组
      
    }
  }
}
</script>


