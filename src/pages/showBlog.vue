<template>
  <page-container>
    <el-container>
      <el-header>Show Blog</el-header>
      <el-main>
        <el-row align v-for="blog in blogList" class="blog-crad">
          <el-col :span="16">
            <el-card shadow="hover">
              <div slot="header">
                <span>{{blog.subject}}</span>
              </div>
              <div>
                {{blog.contentText}}
              </div>
              <div v-for="tag in blog.blogTag">
                <span>{{tag.tagName}}</span>
              </div>
              <div>
                Last Update: {{blog.updatedAt}}
              </div>
              <div>
                Author: {{blog.createdBy}}
              </div>
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
              contentText: data.contentText,
              updatedAt: this.dateFormat(data.updatedAt),
              createdBy: data.createdBy,
              blogTag: data.blogTag
            });
          });
        }
      });
    }
  };
</script>

<style scoped>
 .blog-crad {
   padding-bottom: 20px;
 }
</style>
