<template>
  <div class="profile-wrapper">
    <Avatar></Avatar>
  </div>
</template>

<script>
  import Avatar from '@/components/Avatar'
  export default {
    name:'profile',
    components:{ Avatar }
  }
</script>

<style lang="scss" scoped>
.profile-wrapper {
  display: flex;
}
</style>

