<template>
  <div class="profile-wrapper">
    <Avatar></Avatar>
    <el-popover
      ref="profile"
      placement="bottom"
      width="200"
      trigger="click"
      >
      <div style="text-align:center;">
        <el-button size="mini" type="text" @click="logout()">退出登录</el-button>
      </div>
    </el-popover>
    <p v-popover:profile>{{username}}</p>
  </div>
</template>

<script>
  //mockjs登出接口
  import { getToken } from '@/utils/token.js'
  import Avatar from '@/components/Avatar'
  export default {
    name:'profile',
    components:{ Avatar },
    data(){
      return {
        username:'用户9527',
        visible2:false,
      }
    },
    methods:{
      logout(){ 
        this.$ajax({
          url:'/api/logout',
          method:'post',
          headers:{
            token:getToken()
          }
        })
        .then(res=>{
          console.log(res);
          let {code,msg} = res.data;
          if (code === 200) {
            this.$message({type:'success',message:'退出成功'})
            this.$router.push({name:'Login'})
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.profile-wrapper {
  display: flex;
  p {
    margin: 0 20px 0;
    cursor: pointer;
    transition: .3s;
    &:hover {
      color: #999;
    }
  }
} 
</style>

