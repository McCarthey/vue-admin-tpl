<template>
  <div> 
    <!-- 用户编辑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/UserList' }">用户列表</el-breadcrumb-item>
      <el-breadcrumb-item>用户编辑</el-breadcrumb-item>
    </el-breadcrumb>
    <h3>用户编辑</h3>
  </div>
</template>
