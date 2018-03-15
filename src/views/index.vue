<template>
<!-- 首页 -->
  <div class="main">
    <el-container>
      <el-aside width="auto">
        <!-- 展开/收起按钮 -->
        <div class="ani-icon" :class="aniIcon" @click="toggleCollapse">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <!-- 侧边导航 -->
        <el-menu default-active="UserList" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">用户管理</span>
              <el-menu-item index="UserList">用户列表</el-menu-item>
              <el-menu-item index="AdminList">管理员管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <!-- 头部 -->
        <el-header>
          <section class="profile-section">
            <Profile></Profile>
          </section>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  import Profile from '@/components/Profile' 
  export default {
    name:"index",
    components:{ Profile },
    data() {
      return {
        isCollapse: false,
        aniIcon:'ani-icon-white',
        collapseText:'toggle',
      };
    },
    methods: {
      toggleCollapse(){
        this.isCollapse = !this.isCollapse;
        //过渡动画
        switch (this.aniIcon) {
          case 'ani-icon-white':
            this.aniIcon = 'ani-icon-blue';
            break;
          case 'ani-icon-blue':
            this.aniIcon = 'ani-icon-white';
            break;
          default:
            break;
        }
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
