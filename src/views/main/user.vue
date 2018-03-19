<template>
<!-- 用户列表 -->
  <div>
    <h3>用户列表</h3>
    <el-table
      ref="userTable"
      :data="userList"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-loading="loading">
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
        width="300">
      </el-table-column>
      <el-table-column
        label="链接"
        prop="webUrl"
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
      userList:[],
      multipleSelection:'',
      loading:true,
    }
  },
  created(){
    //认为加入延时模拟请求时间
    setTimeout(() => {
      this.getUsers();
    }, 1000);
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
        this.loading = false;
      })
    },
    handleEdit(index, row) {
      //编辑
      console.log(index, row);
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


