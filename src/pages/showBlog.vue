<template>
  <page-container>
    <el-container>
      <el-header>Show Blog</el-header>
      <el-main>
        <el-row align v-for="blog in blogList" class="blog-crad">
          <el-col>
            <el-card shadow="hover">
              <el-row>
                <el-col :span="6" class="image">
                  <!--<img src="../assets/logo.png" title="Picture">-->
                  <div class="div-image">
                  </div>
                </el-col>
                <el-col :span="17" :offset="1">
                  <el-row class="header">
                    <h1 style="margin-bottom: 0px"><a href="javascript:void(0)" @click="goToDetail(blog.id)">{{blog.subject}}</a></h1>
                  </el-row>
                  <el-row class="introduction">
                    <p style="margin-top: 5px">{{blog.introduction}}</p>
                  </el-row>
                  <el-row>
                    <el-tag size="medium" v-for="(tag, index) in blog.blogTag" :class="{ tagFormat: index > 0 }">{{tag.tagName}}</el-tag>
                  </el-row>
                </el-col>
              </el-row>
              <el-row class="footer">
                <span class="time">
                Last Update: {{blog.updatedAt}}
                </span>
                <span>
                    Author: {{blog.createdBy}}
                  </span>
              </el-row>
            </el-card>
          </el-col>

        </el-row>
      </el-main>
    </el-container>
  </page-container>
</template>

<script>
  import axios from 'axios';
  import _ from 'lodash';
  import '../pages/css/blogStyle.css';

  const findBlogList = () => axios.post('/api/blog/findBlogList');

  export default {
    name: 'show-blog',
    data () {
      return {
        blogList: []
      };
    },
    mounted () {
      findBlogList().then(result => {
        if (result.data.success) {
          _.each(result.data.data, data => {
            this.blogList.push({
              id: data.id,
              subject: data.subject,
              introduction: data.introduction,
              updatedAt: this.dateFormat(data.updatedAt),
              createdBy: data.createdBy,
              blogTag: data.blogTag
            });
          });
        }
      });
    },
    methods: {
      goToDetail (id) {
        this.$router.push(`/detailBlog?blogId=${id}`);
      }
    }
  };
</script>

<style scoped>
  .blog-crad {
    padding-bottom: 20px;
  }
  .header {
    border-bottom: 1px solid #409EFF;
    font-size: 20px;
    font-weight: bolder;
  }
  .introduction {
    margin-bottom: 13px;
    height: 70px;
  }
  .image {
    border: 1px solid #EBEEF5;
  }
  .div-image {
    background-image: url('../assets/logo.png');
    background-repeat: no-repeat;
    background-position:center center;
    background-size: cover;
    width: 100%;
    height: 180px;
  }
</style>
