<template>
  <page-container>
    <div class="detail-header">
      <h1>{{showForm.subject}}</h1>
    </div>
    <div>
      <div class="detail-introduction">
        <p>简介:{{showForm.introduction}}</p>
      </div>
    </div>
    <div class="ql-container ql-snow">
      <div class="ql-editor" v-html="showForm.contentText">

      </div>
    </div>
    <div class="detail-tag">
      <el-tag size="medium" v-for="(tag, index) in showForm.blogTag" :class="{ tagFormat: index > 0 }">{{tag}}</el-tag>
    </div>
    <div class="footer">
      <span>{{showForm.createdBy}}</span>
      <span class="time">{{showForm.updatedAt}}</span>
    </div>
  </page-container>
</template>

<script>
  import axios from 'axios';
  import _ from 'lodash';
  import '../pages/css/blogStyle.css';

  const getDetailBlog = (blogId) => axios.post('/api/blog/getDetailBlog', blogId);

  export default {
    name: 'detail-blog',
    data () {
      return {
        blogId: '',
        showForm: {
          subject: '',
          introduction: '',
          updatedAt: '',
          createdBy: '',
          blogTag: [],
          contentText: ''
        }
      };
    },
    mounted () {
      this.blogId = this.$route.query.blogId;
      getDetailBlog({ blogId: this.blogId}).then(result => {
        if (result.data.success) {
          this.showForm.contentText = result.data.data.contentText;
          this.showForm.subject = result.data.data.subject;
          this.showForm.introduction = result.data.data.introduction;
          this.showForm.updatedAt = this.dateFormat(result.data.data.updatedAt);
          this.showForm.createdBy = result.data.data.createdBy;
          this.showForm.blogTag = _.map(result.data.data.blogTag, item => item.tagName);
        }
      });
    }
  };
</script>

<style scoped>
  .detail-header {
    text-align: center;
  }
  .detail-introduction {
    margin-left: 10%;
    margin-right: 10%;
  }
  .detail-tag {
    float: left;
    margin-top: 5px;
  }
</style>
