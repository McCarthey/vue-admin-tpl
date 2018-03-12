<template>
<!-- 用户列表 -->
  <div>
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
      <el-table-column>
      <el-table-column
        label="内容"
        prop="content"
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

    }
  }
}
</script>


