<template>
  <div class="app-background">
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave">
      <img :src="showImg" id="img" v-if="show" />
    </transition>
    <slot></slot>
  </div>
</template>

<script>
  import Velocity from 'velocity-animate';
  import _ from 'lodash';
  import './css/loginStyle.css';

  export default {
    name: 'login-background',
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
      }
    }
  };
</script>
