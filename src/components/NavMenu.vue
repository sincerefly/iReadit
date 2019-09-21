<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="1"
        >
        <router-link tag="div" to="/">
          <el-menu-item index="1">
            <i class="el-icon-document"></i>Dashboard
          </el-menu-item>
        </router-link>
        <router-link tag="div" to="/about">
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>About
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style>
a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}


</style>