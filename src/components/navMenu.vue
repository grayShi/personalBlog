<template>
  <div>
    <div class="app-header">
      <div class="app-header-filter">
        <el-tabs v-model="activeName">
          <el-tab-pane label="用户管理" name="first"></el-tab-pane>
          <el-tab-pane label="配置管理" name="second"></el-tab-pane>
          <el-tab-pane label="角色管理" name="third"></el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
        </el-tabs>
      </div>
      <div></div>
    </div>
    <div class="app-menu">
      <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
        <!--<el-radio-button :label="false">展开</el-radio-button>-->
        <!--<el-radio-button :label="true">收起</el-radio-button>-->
      <!--</el-radio-group>-->
      <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-menu-item index="1" @click="showMenu">
          <i :class="handleMenu"></i>
          <span slot="title">{{handleMenuTitle}}</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div :class="indexClass">
      <slot></slot>
    </div>
  </div>
</template>
  <script>
    export default {
      data () {
        return {
          isCollapse: false,
          activeName: 'second',
          handleMenuTitle: ''
        };
      },
      computed: {
        indexClass () {
          return [
            {'app-index-menu-open': !this.isCollapse},
            {'app-index-menu-close': this.isCollapse}
          ];
        },
        handleMenu () {
          if (this.isCollapse) {
            this.handleMenuTitle = '展开';
          } else {
            this.handleMenuTitle = '收起';
          }
          return [
            {'el-icon-arrow-left': !this.isCollapse},
            {'el-icon-arrow-right': this.isCollapse}
          ];
        }
      },
      methods: {
        handleOpen (key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose (key, keyPath) {
          console.log(key, keyPath);
        },
        showMenu () {
          this.isCollapse = !this.isCollapse;
        }
      }
    };
  </script>

