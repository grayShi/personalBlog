<template>
  <div class="app-background">
    <el-row style="z-index: 1;top: 35%">
      <el-col :span="6" :offset="9">
        <el-card>
          <div slot="header" class="clearfix">
            <span>登录</span>
          </div>
          <div style="text-align: center;">
            <el-form ref="form" :model="form">
              <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" v-model="form.password"></el-input>
              </el-form-item>
              <el-form-item class="bottom-item">
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <div style="text-align: right">
                  <router-link to="index" id="index" class="app-router-link">点我注册<i class="el-icon-d-arrow-right"></i></router-link>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <transition
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave">
      <img v-bind:src="showImg" id="img" v-if="show" />
    </transition>
  </div>
</template>

<script>
  import Velocity from 'velocity-animate';
  import _ from 'lodash';

  export default {
    name: 'background',
    data () {
      return {
        imgs: [],
        form: {
          username: '',
          password: ''
        },
        isAnimate: false,
        showImg: 'src/assets/background/background1.jpg',
        showQuantity: 0,
        showIndex: 0,
        show: true
      };
    },
    mounted: function () {
      this.$nextTick(function () {
        this.show = false;
        this.loadBackground();
      });
    },
    methods: {
      loadBackground: function () {
        const path = 'src/assets/background';
        this.$http.post('/api/log/find', {
          path, type: 'photo'
        }, {}).then((result) => {
          if (result.data.success) {
            this.showQuantity = result.data.data.length;
            if (this.showQuantity > 0) {
              this.showImg = `${path}/${result.data.data[0]}`;
            }
            _.filter(result.data.data, item => {
              this.imgs.push({
                fileName: item.split('.')[0],
                imgURL: `${path}/${item}`
              });
            });
          }
        });
      },
      beforeEnter: function (name) {
        name.style.opacity = 0;
        name.style.transform = 'scale(1) rotate(0deg)';
      },
      enter: function (name, done) {
        const self = this;
        Velocity(name,
          {
            opacity: 1,
            scale: 1.2,
            rotateZ: '3deg'
          },
          {
            duration: 6000,
            complete: function () {
              done();
              self.show = false;
            }
          }
        );
      },
      leave: function (name, done) {
        const self = this;
        Velocity(name,
          {
            opacity: 0,
            scale: 1,
            rotateZ: '0deg'
          },
          {
            duration: 6000,
            complete: function () {
              done();
              self.showImg = self.imgs[self.showIndex === self.showQuantity - 1 ? self.showIndex = 0 : self.showIndex += 1].imgURL;
              self.show = true;
            }
          }
        );
      },
      onSubmit () {

      }
    }
  };
</script>
